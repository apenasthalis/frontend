
import SelectAno from "../form/SelectAno";
import SelectTransparent from "../form/SelectTransparent";
import styles from "./DadosRelatorio.module.css";
import immg from "../img/flag.svg"
import imml from "../img/briefcase.svg";
import imgh from "../img/alert-triangle.svg";
import imgg from "../img/clock.svg";
import BancodeHoras from "../min/BancodeHoras";
import Registros from "../min/Registros";
import { useEffect, useState } from "react";
import axios from "axios";



function DadosRelatorio() {


const [dados, setDados] = useState([0]);

useEffect(() => {
  const apiUrl = "http://127.0.0.1:8000/api/cargahorariafuncionario/18";

  axios
    .get(apiUrl)
    .then((response) => {
      setDados(response.data);
    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
    });
}, []);

  
  return (
    <div className={styles.divcinza}>
      <nav className={styles.navs}>
        <h3 className={styles.title}>Relatorio</h3>
        <div className={styles.selects}>
          <SelectTransparent />
          <SelectAno />
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
          <BancodeHoras img={imgh} txt={"Expectativa: 184:00:00"} />
          <BancodeHoras
            img={imgg}
            txt={"Banco de Horas"}
          />
        </div>
      </div>
      <div className={styles.dados}>
        <Registros/>
      </div>
    </div>
  );
}

export default DadosRelatorio;
