import styles from './Corpo.module.css'
import imgb from '../img/brook.jpg'
import im from '../img/talos.png'
import { Link } from 'react-router-dom';

function Corpo() {
  
    return (
      <>
        <h1 className={styles.title}>Registrar Ponto</h1>
        <h2 className={styles.title2}>Selecione seu perfil</h2>
        <div>
          <Link to="/selecionarfuncionario">
            <img className={styles.imgl} src={im} alt="" />
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