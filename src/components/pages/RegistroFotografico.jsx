import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import Botao from "../form/Botao";
import BotaoBranco from "../form/BotaoBranco";
import styles from "./Registro.module.css";

function RegistroFotografico() {
  const webcamRef = useRef(null);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    }
  };

  useEffect(() => {
    checkCameraPermissions();
  }, []);

  const checkCameraPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
    }
  };

  return (
    <div className={styles.div}>
      <div className={styles.cam}>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      </div>
      <div className={styles.divbtn}>
        <Link to="/selecionarfuncionario">
          <BotaoBranco text="Voltar" />
        </Link>
        <Botao onClick={capture} text="Registrar" />
      </div>
    </div>
  );
}

export default RegistroFotografico;
