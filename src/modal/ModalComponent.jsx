import React from "react";
import styles from './Modal.module.css'
import Botao from "../components/form/Botao";
import BotaoBranco from "../components/form/BotaoBranco";
import InputText from "./InputText";
import imga from '../components/img/Union2.svg'


function ModalComponent({isOpen, onRequestClose, title }) {
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
              <InputText label={"Dia"} placeholder={"01/01/2024"} type={'button'}/>
              <InputText label={"Horário"} placeholder={"08:00:00"} type={'button'}/>
            </div>
            <div className={styles.mid}>
                <label htmlFor="po">Justificativa</label>
                <textarea name="po" id="po" placeholder={'Digite aqui'} />
            </div>
          <div className={styles.image}>
            <form className={styles.form} enctype="multipart/form-data">
              <div className={styles.spana}>
                  <div className={styles.picture}>
                  <img src={imga} alt="" />
                  </div>
                  <br />
                <span className={styles.desc}>
                  Algum Documento que comprove?
                </span>
                <span className={styles.limit}>
                  Tamanho máximo xMB?
                </span>
              </div>
              <input type="file" name="arquivo-imagem" id="seletor-imagem" accept="image/*"/>
          <hr/>
            </form>
          </div>
          </div>
          <div className={styles.down}>
            <BotaoBranco onClick={onRequestClose}  text={"Cancelar"}></BotaoBranco>
            <Botao onClick={onRequestClose} txt={"Salvar"}></Botao>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalComponent;
