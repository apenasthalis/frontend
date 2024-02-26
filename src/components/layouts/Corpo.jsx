import styles from "./Corpo.module.css";
import imgb from "../img/brook.jpg";
import im from "../img/talos.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import imgs from '../img/Perfil.svg';

function Corpo() {
  const [users, setUsers] = useState([])

  const [debounsce, setDebounsce] = useState(false);
  
  useEffect(() => {
    if (!users[0] && !debounsce) {
      axios.get(`http://127.0.0.1:8000/api/funcionario`)
        .then(({data}) => {
          setUsers(data);
          setDebounsce(true);

        });
      }
      console.log(users);
  }, [users, debounsce, setDebounsce, setUsers]);
  
   


  return (
    <>
      <h1 className={styles.title}>Registrar Ponto</h1>
      <h2 className={styles.title2}>Selecione seu perfil</h2>
      <div>
        {users[0] && users.map((usuario) => {
          return (
            <UserCard
              key={usuario.cd_funcionario}
              id={usuario.cd_funcionario ?? null}
              nome={usuario.no_funcionario}
              img={usuario.imagem_path}
            />
          );
        })}
      </div>
    </>
  );
}

function UserCard({ id, nome,img }) {

  return (
    <Link to={`/selecionarfuncionario/${id}`}>
      {img ? (
        <img
          className={styles.imgl}
          src={`http://127.0.0.1:8000/api/${img}`}
          alt=""
        />
      ) : (
        <>
          <img className={styles.imgl} src={imgs} alt="" />
        </>
      )}
    </Link>
  );
}

export default Corpo;
