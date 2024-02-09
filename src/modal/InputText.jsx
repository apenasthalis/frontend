import styles from './InputText.module.css'

function InputText({label, placeholder, type}){
    return (
      <div className={styles.div}>
        <label className={styles.label} htmlFor="burro">{label}</label>
        <input className={styles.input} type={type} name="burro" id="burro"  value={placeholder} />
      </div>
    );
}

export default InputText;