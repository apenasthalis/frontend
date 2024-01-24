import styles from './RegistrosHoras.module.css'
// import axios from 'axios';
// import React, { useState, useEffect } from "react";

function RegistrosHoras({data, entrada1, saida1, entrada2, saida2, horastrabalhadas}){
    // const [dados, setDados] = useState([]);

    // useEffect(() => {
    //   const apiUrl = "http://127.0.0.1:8000/api/cargahorariafuncionario/18";

    //   axios
    //     .get(apiUrl)
    //     .then((response) => {
    //       setDados(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Erro ao buscar dados:", error);
    //     });
    // }, []);
   
   
    return (
      <div className={styles.grid}>
        <span>{data}</span>

        <span>{entrada1}</span>
        <span>{saida1}</span>

        <span>{entrada2}</span>
        <span>{saida2}</span>
        <span>{horastrabalhadas}</span>
      </div>
    );
}

export default RegistrosHoras;