import styles from "./SideBarAdmin.module.css";
import imguser from "../components/img/users.svg";
import imgm from "../components/img/bar-chart-2.svg";
import imgb from "../components/img/align-left.svg";
import imgt from "../components/img/Perfil.svg";
import imgk from "../components/img/log-out.svg";
import imgcalendario from "../components/img/calendar.svg";
import { Link } from "react-router-dom";
import ComponentsBar from "../components/form/ComponentsBar";

function SideBarAdmin() {
  return (
    <div className={styles.divlateral}>
      <div className={styles.titulo}>
      <h1 className={styles.title}>Leopard</h1>
      </div>
      <div className={styles.divcoisas}>
        <Link className={styles.link} to="/funcionario">
          <ComponentsBar imgg={imguser} txt={"Funcionários"} />
        </Link>
        <Link className={styles.link} to="/relatorioadmin">
          <ComponentsBar imgg={imgm} txt={"Relatórios"} />
        </Link>
        <Link className={styles.link} to="/dailysadmin">
          <ComponentsBar imgg={imgb} txt={"Dailys"} />
        </Link>
        <Link className={styles.link} to="/justificativa">
          <ComponentsBar imgg={imgb} txt={"Justificativas"} />
        </Link>
        <Link className={styles.link} to="/feriado">
          <ComponentsBar imgg={imgcalendario} txt={"Feriados"} />
        </Link>
      </div>
      <div className={styles.logout}>
        <ComponentsBar imgg={imgt} txt={"Thalis Gabriel"} />
        <img src={imgk} alt="" />
      </div>
    </div>
  );
}

export default SideBarAdmin;
