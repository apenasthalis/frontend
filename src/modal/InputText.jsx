import styles from './InputText.module.css'

function InputText({label, placeholder, type, onChange}){
    return (
      <div className={styles.div}>
        <label className={styles.label} htmlFor="burro">{label}</label>
        <input className={styles.input} type={type} name="burro" id="burro" onChange={onChange}  value={placeholder} />
      </div>
    );
}

export default InputText;