import ComponentsBar from '../form/ComponentsBar';
import styles from './SideBar.module.css';
import imgm from '../img/bar-chart-2.svg'
import imgb from "../img/align-left.svg";
import imgt from "../img/Perfil.svg";
import imgk from "../img/log-out.svg"

function SideBar()
{
    return (
      <div className={styles.divlateral}>
        <h1 className={styles.title}>Leopard</h1>
        <div className={styles.divcoisas}>
          <ComponentsBar imgg={imgm} txt={"Relatórios"} />
          <ComponentsBar imgg={imgb} txt={"Dailys"} />
        </div>
        <div className={styles.logout}>
          <ComponentsBar imgg={imgt} txt={"Thalis Gabriel"} />
          <img  src={imgk} alt="" />
        </div>
      </div>
    );
}


export default SideBar;