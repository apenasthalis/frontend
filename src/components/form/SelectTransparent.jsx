import styles from './SelectTransparent.module.css'

function SelectTransparent(){
    return (
      <>
        <select className={styles.selection} name="nit" id="nit">
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
        </select>
      </>
    );
}

export default SelectTransparent;