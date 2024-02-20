import React, { useRef } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import Botao from "../form/Botao";
import BotaoBranco from "../form/BotaoBranco";
import styles from "./Registro.module.css";
import { Link } from "react-router-dom";

function RegistroFotografico() {
  const webcamRef = useRef(null);

  const capture = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const captureTime = new Date();

          captureTime.setHours(captureTime.getHours() - 3);
          const data = captureTime.toISOString().split("T")[0];
          const hora = captureTime.toISOString().split("T")[1].split(".")[0];

     const payload = {
       tb_funcionario_cd_funcionario: "13",
       data: {
         imagem: imageSrc,
         data: data,
         horario: hora,
       },
     };

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/cargahorariafuncionario",
          {
            imagem: imageSrc,
            data: data,
            horario: hora,
            id: 13
          }
        );

        console.log("Resposta do servidor:", response.data);
      } catch (error) {
        console.error("Erro ao enviar imagem para o servidor:", error);
      }
    }
  };

  return (
    <div className={styles.div}>
      <div className={styles.cam}>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" className={styles.webcam}/>
      </div>
      <div className={styles.divbtn}>
        <Link to='/'>
        <BotaoBranco text="Voltar" />
        </Link>
        <Botao onClick={capture} text="Registrar" />
      </div>
    </div>
  );
}

export default RegistroFotografico;
