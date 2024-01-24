import styles from './SelectAno.module.css';

function SelectAno(){
    return (
      <>
        <select className={styles.selectionn} name="see" id="see">
          <option value="janeiro">2024</option>
          <option value="janeiro">2023</option>
          <option value="janeiro">2022</option>
          <option value="janeiro">2021</option>
          <option value="janeiro">2020</option>
        </select>
      </>
    );
}

export default SelectAno;