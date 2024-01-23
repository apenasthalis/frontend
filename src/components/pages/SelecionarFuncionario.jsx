import { Link } from "react-router-dom";
import styles from "./Selecionar.module.css";
import imga from "../img/brook.jpg";
import Botao from "../form/Botao";

function SelecionarFuncionario() {
  return (
    <div className={styles.div}>
      <img src={imga} alt="" />
      <span>Nome do Funcionário </span>
      <Link to='/registrofotografico'>
        <Botao text={"Selecionar"} />
      </Link>
    </div>
  );
}

export default SelecionarFuncionario;
