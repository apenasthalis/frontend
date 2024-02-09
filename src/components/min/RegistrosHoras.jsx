import React, { useState } from "react";
import styles from "./RegistrosHoras.module.css";
import ModalComponent from "../../modal/ModalComponent";


function formatHora(hora, openModal) {
  return hora === "00:00:00" ? (
    <span className={styles.falta} onClick={openModal}>
      Falta
    </span>
  ) : (
    hora
  );
}

function RegistrosHoras({data,  entrada1,saida1,entrada2,saida2, horastrabalhadas}) 
{
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const formattedEntrada1 = formatHora(entrada1, openModal);
  const formattedSaida1 = formatHora(saida1, openModal);
  const formattedEntrada2 = formatHora(entrada2, openModal);
  const formattedSaida2 = formatHora(saida2, openModal);
  
  return (
    <div className={styles.grid}>
      <span>{data}</span>

      <span>{formattedEntrada1}</span>
      <span>{formattedSaida1}</span>

      <span>{formattedEntrada2}</span>
      <span>{formattedSaida2}</span>
      <span>{horastrabalhadas}</span>

      <ModalComponent title={'Justificar Falta'} isOpen={modalIsOpen} onRequestClose={closeModal}/>
    </div>
  );
}

export default RegistrosHoras;
