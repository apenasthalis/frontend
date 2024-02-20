import styles from "./RelatoriosAdmin.module.css";
import SideBarAdmin from "../../administrador/SideBarAdmin";
import DadosRelatorioAdmin from "../../administrador/dados_relatorios/DadosRelatorioAdmin";

function RelatoriosAdmin() {
  return (
    <div className={styles.divbar}>
      <SideBarAdmin />
      <DadosRelatorioAdmin/>
    </div>
  );
}

export default RelatoriosAdmin;
