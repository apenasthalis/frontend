import SideBarAdmin from '../../administrador/SideBarAdmin';
import DadosFuncionarios from '../../administrador/dados_funcionarios/DadosFuncionarios';
import styles from './Funcionario.module.css'


function Funcionario(){
    return (
      <div className={styles.divbar}>
        <SideBarAdmin />
        <DadosFuncionarios />
      </div>
    );
}

export default Funcionario;