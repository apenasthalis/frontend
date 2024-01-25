import { useEffect, useState } from "react";
import styles from "./Registros.module.css";
import RegistrosHoras from "./RegistrosHoras";
import axios from "axios";

function Registros() {
  const [dados, setDados] = useState([0]);

  const buscarDadosHorasUsuario = async () => {
    const apiUrl = "http://127.0.0.1:8000/api/cargahorariafuncionario/18";

    try {
      const { data } = await axios.get(apiUrl);
      setDados(data);
      console.log("Data", data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    buscarDadosHorasUsuario();
  }, []);

  // console.log(dados.resultado);
  try {
    let arquivos = JSON.parse(dados.horarios);
    console.log(arquivos);
  } catch (error) {
    console.error("Erro ao fazer parse do JSON:", error);
  }

  return (
    <div>
      <div className={styles.gridhead}>
        <h2>DATA</h2>
        <h2>ENTRADA</h2>
        <h2>SAÍDA</h2>
        <h2>ENTRADA</h2>
        <h2>SAÍDA</h2>
        <h2>HORAS TRABALHADAS</h2>
      </div>
      <div className={styles.grid}>
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />{" "}
        <RegistrosHoras
          data={"20/02/2021"}
          entrada1={"08:09:32"}
          saida1={"12:00:43"}
          entrada2={"14:00:09"}
          saida2={"19:09:08"}
          horastrabalhadas={dados["resultado"]}
        />
      </div>
    </div>
  );
}

export default Registros;
