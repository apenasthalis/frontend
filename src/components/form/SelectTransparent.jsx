import styles from './SelectTransparent.module.css'

function SelectTransparent({ mesSelecionado, onMesChange }) {
  return (
    <>
      <select
        className={styles.selection}
        onChange={onMesChange}
        value={mesSelecionado}
      >
        <option value="1">Janeiro</option>
        <option value="2">Fevereiro</option>
        <option value="3">Março</option>
        <option value="4">Abril</option>
        <option value="5">Maio</option>
        <option value="6">Junho</option>
        <option value="7">Julho</option>
        <option value="8">Agosto</option>
        <option value="9">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>
    </>
  );
}

export default SelectTransparent;