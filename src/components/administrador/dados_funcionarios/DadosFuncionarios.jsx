import styles from "./DadosFuncionarios.module.css";
import imagem from '../../img/Union.svg'
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import Botao from "../../form/Botao";
import ModalAdm from "../modalAdm/ModalAdm";


function DadosFuncionarios() {
  const [dados, setDados] = useState([0]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const buscarDadosHorasUsuario = async () => {
  
  
  
    const apiUrl = `http://127.0.0.1:8000/api/funcionario`;
  
    try {
      const { data } = await axios.get(apiUrl);
      setDados(data);
      console.log("Data", data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };
  
  
    useEffect(() => {
      buscarDadosHorasUsuario();
    }, []);


const openModal = () => {
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
};


  return (
    <div className={styles.divcinza}>
      <nav className={styles.navs}>
        <h3 className={styles.title}>Funcionários</h3>
        <div className={styles.leftFunctions}>
          <input
            className={styles.search}
            type="text"
            name=""
            id=""
            placeholder="Pesquisar"
          />
          <button className={styles.btn} onClick={openModal}>
            {" "}
            <img className={styles.image} src={imagem} alt="" />
            Adicionar Funcionário
          </button>
        </div>
      </nav>
      <div className={styles.names}>
        {dados.map((item) => (
          <Cards
            key={item.cd_funcionario}
            name={item.no_funcionario}
            hour={"+09:02:53"}
            id={item.cd_funcionario}
          />
        ))}
      </div>
      <ModalAdm isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default DadosFuncionarios;
