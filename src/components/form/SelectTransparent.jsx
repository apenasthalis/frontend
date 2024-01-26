import styles from './SelectTransparent.module.css'

function SelectTransparent({value}){
    return (
      <>
        <select className={styles.selection} name="nit" id="nit">
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="12">Dezembro</option>
        </select>
      </>
    );
}

export default SelectTransparent;