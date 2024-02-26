import SelectAno from "../form/SelectAno";
import SelectTransparent from "../form/SelectTransparent";
import styles from "./DadosRelatorio.module.css";
import immg from "../img/flag.svg";
import imml from "../img/briefcase.svg";
import imgh from "../img/alert-triangle.svg";
import imgg from "../img/clock.svg";
import BancodeHoras from "../min/BancodeHoras";
import Registros from "../min/Registros";
import { useEffect, useState } from "react";
import axios from "axios";

function DadosRelatorio() {
  const [anoSelecionado, setAnoSelecionado] = useState("");
  const [mesSelecionado, setMesSelecionado] = useState("");
  const [dados, setDados] = useState([0]);
  const [hour, setHour] = useState(0);

  const userId = localStorage.getItem("user_id");

const buscarDadosHorasUsuario = async () => {
  if (!anoSelecionado || !mesSelecionado || !userId) {
    console.error("Ano, mês ou ID do usuário não definidos");
    return;
  }

const apiUrl = `http://127.0.0.1:8000/api/cargahorariafuncionario/${userId}/${anoSelecionado}/${mesSelecionado}`;

  try {
    const { data } = await axios.get(apiUrl, {
      params: {
        ano: anoSelecionado,
        mes: mesSelecionado,
      },
    });

    setDados(data);
    // console.log("Data", data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};


  useEffect(() => {
    buscarDadosHorasUsuario();
  }, [anoSelecionado, mesSelecionado]);

const handleAnoChange = (event) => {
  setAnoSelecionado(event.target.value);
};

const handleMesChange = (event) => {
  setMesSelecionado(event.target.value);
};


const fazerRequisicao = async () => {
      const url = `http://127.0.0.1:8000/api/bancodehoras/${userId}`;
      try {

        const resposta = await axios.get(url);
         setHour(resposta.data);

      } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
      }
    };

    useEffect(() => {
      fazerRequisicao(userId);
    }, []);

  
//  const requisition = async (id, ano, mes) => {
//    const url = `http://127.0.0.1:8000/api/cargahorariafuncionario/${id}/${ano}/${mes}`;

//    try {
//      const response = await axios.get(url);
//      console.log(`Requisição para ${ano}/${mes} bem-sucedida:`, response.data);
//    } catch (error) {
//      console.error(`Erro na requisição para ${ano}/${mes}:`, error);
//    }
//  };

//  useEffect(() => {
//    if (anoSelecionado && mesSelecionado) {
//      requisition(userId, anoSelecionado, mesSelecionado);
//    }
//  }, [anoSelecionado, mesSelecionado]);
 const updateDados = (updatedData) => {
   setDados(updatedData);
 };

 const updateHour = (updatedHour) => {
   setHour(updatedHour);
 };

  return (
    <div className={styles.divcinza}>
      <nav className={styles.navs}>
        <h3 className={styles.title}>Relatorio</h3>
        <div className={styles.selects}>
          <SelectTransparent
            mesSelecionado={mesSelecionado}
            onMesChange={handleMesChange}
          />
          <SelectAno
            anoSelecionado={anoSelecionado}
            onAnoChange={handleAnoChange}
          />
        </div>
      </nav>
      <div className={styles.minidiv}>
        <div className={styles.dual}>
          <BancodeHoras img={immg} txt={"Expectativa: 184:00:00"} />
          <BancodeHoras
            img={imml}
            txt={"Horas Trabalhadas: 24:00:00 de 32:00:00"}
          />
        </div>
        <div className={styles.dual}>
          <BancodeHoras img={imgh} txt={"devendo: 00:00"} />
          <BancodeHoras img={imgg} txt={`Banco de Horas: ${hour}`} />
        </div>
      </div>
      <div className={styles.dados}>
        <Registros
          anoSelecionado={anoSelecionado}
          mesSelecionado={mesSelecionado}
          onUpdate={updateDados}
          onUpdateHour={updateHour}
        />
      </div>
    </div>
  );
}

export default DadosRelatorio;
