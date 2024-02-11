import ComponentsBar from '../form/ComponentsBar';
import styles from './SideBar.module.css';
import imgm from '../img/bar-chart-2.svg'
import imgb from "../img/align-left.svg";
import imgt from "../img/Perfil.svg";
import imgk from "../img/log-out.svg"
import { Link } from 'react-router-dom';

function SideBar()
{
    return (
      <div className={styles.divlateral}>
        <div className={styles.titulo}>
          <h1 className={styles.title}>Leopard</h1>
        </div>
        <div className={styles.divcoisas}>
          <Link className={styles.link} to="/relatorio">
            <ComponentsBar imgg={imgm} txt={"Relatórios"} />
          </Link>
          <Link className={styles.link} to="/daily">
            <ComponentsBar imgg={imgb} txt={"Dailys"} />
          </Link>
        </div>
        <div className={styles.logout}>
          <ComponentsBar imgg={imgt} txt={"Thalis Gabriel"} />
          <img src={imgk} alt="" />
        </div>
      </div>
    );
}


export default SideBar;