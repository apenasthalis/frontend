import { Link, useParams } from "react-router-dom";
import styles from "./Selecionar.module.css";
import imga from "../img/brook.jpg";
import Botao from "../form/Botao";
import im from '../img/talos.png'
import { useEffect, useState } from "react";
import axios from "axios";

function SelecionarFuncionario() {
  const params = useParams('selecionarfuncionaro/:id');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!users[0]) {
      axios.get(`http://127.0.0.1:8000/api/funcionario/${params.id}`)
        .then(({ data }) => {
          setUsers(data);
        });
      }
    }, [params]);
    // console.log(users[0].imagem_path);


  return (
    users[0] && (
      <div className={styles.div}>
        <div className={styles.centro}>
            <img className={styles.image} src={`http://127.0.0.1:8000/api/${users[0].imagem_path}`} alt={users[0].imagem_path} />
            <span>{users[0].no_funcionario}</span>
            <Link to={`/registrofotografico/${users[0].cd_funcionario}`}>
              <Botao text={"Selecionar"} />
            </Link>
        </div>
      </div>
    )
  );
}

export default SelecionarFuncionario;
