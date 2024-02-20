import { useEffect, useState } from "react";
import styles from "./RegistrosAdmin.module.css";
import axios from "axios";
import RegistrosHoras from "../../min/RegistrosHoras";

function RegistrosAdmin({ cd_funcionario, anoSelecionado, mesSelecionado,  }) {
  const userId = localStorage.getItem("user_id");
  const [dados, setDados] = useState([0]);

   

  const buscarDadosHorasUsuario = async () => {
    // if (!userId || !anoSelecionado || !mesSelecionado) {
    //   console.error("ID do usuário, ano ou mês não definidos");
    //   return;
    // }
    const apiUrl = `http://127.0.0.1:8000/api/cargahorariafuncionario/${cd_funcionario}/${anoSelecionado}/${mesSelecionado}`;

    try {
      const { data } = await axios.get(apiUrl);
      setDados(data);
      // console.log("Data", data);
    } catch (error) {
      // console.error("Erro ao buscar dados:", error);
    }
  };


  useEffect(() => {
    buscarDadosHorasUsuario();
  }, [cd_funcionario, anoSelecionado, mesSelecionado]);

  var resultados = [];

  try {
    var arquivos = JSON.parse(dados.horarios);

    if (
      typeof arquivos === "object" &&
      arquivos !== null &&
      Object.keys(arquivos).length > 0
    ) {
      for (var datab in arquivos) {
        if (arquivos.hasOwnProperty(datab)) {
          var dataResult = {
            data: datab,
            entradasSaidas: [],
          };

          arquivos[datab].forEach(function (item, index) {
            var entradaSaida = {
              hora: item.hora,
              tipo: item.tipo,
            };

            dataResult.entradasSaidas.push(entradaSaida);
          });

          resultados.push(dataResult);
        }
      }
    } else {
      console.log("O objeto 'arquivos' não é válido ou está vazio.");
    }
  } catch (error) {
    console.error("Erro ao fazer parse do JSON:", error);
  }

  var arrayDeValores = [];

  for (let chave in dados.segundos) {
    if (dados.segundos.hasOwnProperty(chave)) {
      arrayDeValores.push(dados.segundos[chave]);
    }
  }

  console.log(resultados);

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
        {resultados.map((item, index) => (
          <RegistrosHoras
            key={item.data}
            data={item.data}
            entrada1={item.entradasSaidas[0].hora}
            saida1={item.entradasSaidas[1].hora}
            entrada2={item.entradasSaidas[2].hora}
            saida2={item.entradasSaidas[3].hora}
            horastrabalhadas={arrayDeValores[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default RegistrosAdmin;
