import styles from './Botao.module.css';

function Botao({text}){
    return <button className={styles.btn}>{text}</button>;
}

export default Botao;