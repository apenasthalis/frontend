import React, { useState } from "react";
import styles from './Modal.module.css'
import Botao from "../components/form/Botao";
import BotaoBranco from "../components/form/BotaoBranco";
import InputText from "./InputText";
import imga from '../components/img/Union2.svg'
import axios from "axios";


function ModalComponent({isOpen, onRequestClose, title, registros, onModalClick  }) {
  const [justificativa, setJustificativa] = useState("");
  const [arquivo, setArquivo] = useState(null);


  const entradasSaidasArray =
    registros && Array.isArray(registros.entradasSaidas)
      ? registros.entradasSaidas
      : [];

  const registrosArray = entradasSaidasArray.map((item, index) => ({
    data: registros.data,
    entradasSaidas: item,
    index: index,
  }));

  const handleModalClick = (index) => {
    console.log(`Modal clicado com índice: ${index}`);
    if (onModalClick) {
      onModalClick(index);
    }
  };

  const [horario, setHorario] = useState(() => {
      if (registrosArray[0].index == 0) {
        return '08:00:00'
      }

      if (registrosArray[1].index == 1) {
        return "12:00:00";
      }

      if (registrosArray[2].index == 2) {
        return "14:00:00";
      }

      if (registrosArray[3].index == 3) {
        return "18:00:00";
      }

   }
   );

  if (registrosArray[0].index == 0) {
  }

   const [dia, setDia] = useState(registrosArray[0].data);
  const CriarDadosBackEnd = async () => {
    const user_id = localStorage.getItem("user_id");
    const formData = {
      user_id,
      dia,
      horario,
      justificativa,
      arquivo,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/justificativa",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console, error("Erro ao enviar dados ao backend", error);
    }
  };

  const handleChangeDia = (event) => {
    setDia(event.target.value);
  };

  const handleChangeHorario = (event) => {
    setHorario(event.target.value);
  };

  const handleChangeJustificativa = (event) => {
    setJustificativa(event.target.value);
  };

  const handleArquivoChange = (event) => {
    setArquivo(event.target.files[0]);
  };

  return (
    isOpen && (
      <div
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
        className={styles.modal}
      >
        <div className={styles.modal_container}>
          <nav className={styles.nav}>
            <h1>{title}</h1>
            <hr />
          </nav>
          <div className={styles.body}>
            <div className={styles.div}>
              <InputText
                label={"Dia"}
                placeholder={dia}
                onChange={handleChangeDia}
                type={"text"}
              />
              <InputText
                label={"Horário"}
                placeholder={horario}
                onChange={handleChangeHorario}
                type={"text"}
              />
            </div>
            <div className={styles.mid}>
              <label htmlFor="po">Justificativa</label>
              <textarea
                name="po"
                id="po"
                placeholder={"Digite aqui"}
                value={justificativa}
                onChange={handleChangeJustificativa}
              />
            </div>
            <div className={styles.image}>
              <form className={styles.form} encType="multipart/form-data">
                <div className={styles.spana}>
                  <div className={styles.picture}>
                    <img src={imga} alt="" />
                  </div>
                  <br />
                  <span className={styles.desc}>
                    Algum Documento que comprove?
                  </span>
                  <span className={styles.limit}>Tamanho máximo xMB?</span>
                </div>
                <input
                  type="file"
                  name="arquivo-imagem"
                  id="seletor-imagem"
                  onChange={handleArquivoChange}
                  accept="image/*"
                />
                <hr />
              </form>
            </div>
          </div>
          <div className={styles.down}>
            <BotaoBranco
              onClick={onRequestClose}
              text={"Cancelar"}
            ></BotaoBranco>
            <Botao onClick={CriarDadosBackEnd} txt={"Salvar"}></Botao>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalComponent;
