import styles from './Registro.module.css'
import imgc from '../img/brook.jpg'
import { Link } from 'react-router-dom';
import Botao from '../form/Botao';
import BotaoBranco from '../form/BotaoBranco';


function RegistroFotografico() {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={imgc} alt="" />
      <div className={styles.divbtn}>
        <Link to={"/selecionarfuncionario"}>
          <BotaoBranco text={"Voltar"}/>
        </Link>
        <Link>
          <Botao text={"Registrar"} />
        </Link>
      </div>
    </div>
  );
}

export default RegistroFotografico;
