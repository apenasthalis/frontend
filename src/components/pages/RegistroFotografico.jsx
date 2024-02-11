import React, { useRef } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import Botao from "../form/Botao";
import BotaoBranco from "../form/BotaoBranco";
import styles from "./Registro.module.css";

function RegistroFotografico() {
  const webcamRef = useRef(null);

  const capture = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const captureTime = new Date().toISOString();

     const payload = {
       tb_funcionario_cd_funcionario: "13",
       data: {
         imagem: imageSrc,
         horario: captureTime,
       },
     };

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/cargahorariafuncionario",
          {
           payload
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
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      </div>
      <div className={styles.divbtn}>
        <BotaoBranco text="Voltar" />
        <Botao onClick={capture} text="Registrar" />
      </div>
    </div>
  );
}

export default RegistroFotografico;
