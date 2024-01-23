import styles from "./BotaoBranco.module.css";

function BotaoBranco({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

export default BotaoBranco;
