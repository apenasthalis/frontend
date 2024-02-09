import styles from "./BotaoBranco.module.css";

function BotaoBranco({ text, onClick }) {
  return <button onClick={onClick} className={styles.btn}>{text}</button>;
}

export default BotaoBranco;
