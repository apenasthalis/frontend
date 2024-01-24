import styles from "./ComponentsBar.module.css";

function ComponentsBar({ imgg, txt }) {
  return (
    <div className={styles.divitens}>
      <img className={styles.images} src={imgg} alt="" />
      <span className={styles.texto}>{txt}</span>
    </div>
  );
}

export default ComponentsBar;
