import styles from './Corpo.module.css'
import imgb from '../img/brook.jpg'
import im from '../img/talos.png'
import { Link } from 'react-router-dom';
import axios from "axios";

function Corpo() {

  const handleImageClick = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/usuario/${userId}`);

      const userData = response.data;

      console.log(userData);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário", error);
    }
  };
  
    return (
      <>
        <h1 className={styles.title}>Registrar Ponto</h1>
        <h2 className={styles.title2}>Selecione seu perfil</h2>
        <div>
          <Link to="/selecionarfuncionario">
            <img className={styles.imgl} src={im} alt="" onClick={() => handleImageClick(13)}/>
          </Link>
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
          <img className={styles.imgl} src={im} alt="" />
        </div>
      </>
    );
  }

  export default Corpo;