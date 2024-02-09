import styles from './Botao.module.css';

function Botao({txt, onClick}){

    return <input onClick={onClick} className={styles.btn} type="submit" value={txt} />;
}

export default Botao;