import styles from './Login.module.css';
import Botao from "../form/Botao";
import BotaoBranco from '../form/BotaoBranco';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className={styles.div1}>
      <h1 className={styles.title09}>Leopard</h1>
      <div className={styles.divlabel}>
        <label className={styles.label} htmlFor="nome">
          Usuário
        </label>
        <input className={styles.escrever} name="nome" type="text" placeholder='Nome/CPF...'/>
        <label className={styles.label} htmlFor="nao">
          Senha
        </label>
        <input className={styles.escrever} name="nao" type="password" placeholder='Senha...'/>
      </div>
      <Link to="/relatorio">
        <Botao text={"Entrar"} />
      </Link>
      <Link to="/">
        <BotaoBranco text={"Voltar"} />
      </Link>
    </div>
  );
}

export default Login;
