import styles from './JustificativaAdmin.module.css'
import SideBarAdmin from "../../administrador/SideBarAdmin";
import DadosJustificativa from '../../administrador/dados_justificativa/DadosJustificativa';

function JustificativaAdmin(){
    return(
        <div className={styles.divbar}>
        <SideBarAdmin/>
        <DadosJustificativa/>
        </div>
    )
}


export default JustificativaAdmin;