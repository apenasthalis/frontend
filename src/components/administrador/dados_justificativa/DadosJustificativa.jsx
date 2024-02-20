import axios from "axios";
import styles from "./DadosJustificativa.module.css";
import { useEffect, useState } from "react";
import RegistrosJustificativa from "./RegistrosJustificativa";

function DadosJustificativa() {
  const [dados, setDados] = useState([]);
  const apiUrl = `http://127.0.0.1:8000/api/justificativa`;

  useEffect(() => {
    const buscarJustificativas = async () => {
      try {
        const { data } = await axios.get(apiUrl);
        setDados(data);
      } catch (error) {
        console.log("Erro ao buscar dados:", error);
      }
    };

    buscarJustificativas();
  }, []);

  console.log(dados);

  return (
    <div className={styles.div}>
      <nav className={styles.nav}>
        <h3>Justificativas</h3>
      </nav>
      <div className={styles.main}>
        <div className={styles.gridhead}>
          <h2>FUNCIONÁRIO</h2>
          <h2>DATA</h2>
          <h2>HORÁRIO</h2>
          <h2>JUSTIFICATIVA</h2>
          <h2>ARQUIVO</h2>
          <h2>OPERAÇÕES</h2>
        </div>
        {dados.map((item) => (
          <RegistrosJustificativa
            id={item.cd_funcionario}
            funcionario={item.nome_usuario}
            data={item.dt_registro}
            horario={item.ts_registro}
            justificativa={item.ds_justificativa}

          />
        ))}
      </div>
    </div>
  );
}

export default DadosJustificativa;
