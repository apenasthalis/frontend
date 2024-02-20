import React, { useState } from "react";
import styles from "./RegistrosHoras.module.css";
import ModalComponent from "../../modal/ModalComponent";


function formatHora(hora, openModal, registros) {
  return hora === "00:00:00" ? (
    <span className={styles.falta} onClick={() => openModal(true)}>
      Falta
    </span>
  ) : (
    hora
  );
}

function RegistrosHoras({data, openModalRegistro, entrada1,saida1,entrada2,saida2, horastrabalhadas, registros}) 
{

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    openModalRegistro(modalIsOpen);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const formattedEntrada1 = formatHora(entrada1, openModal, () => openModal(registros));
  const formattedSaida1 = formatHora(saida1, openModal, () => openModal(registros));
  const formattedEntrada2 = formatHora(entrada2, openModal, () => openModal(registros));
  const formattedSaida2 = formatHora(saida2, openModal, () => openModal(registros));
  
  return (
    <div className={styles.grid}>
      <span>{data}</span>

      <span>{formattedEntrada1}</span>
      <span>{formattedSaida1}</span>

      <span>{formattedEntrada2}</span>
      <span>{formattedSaida2}</span>
      <span>{horastrabalhadas}</span>

    </div>
  );
}

export default RegistrosHoras;
