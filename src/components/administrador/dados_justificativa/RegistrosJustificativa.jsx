import styles from './RegistrosJustificativa.module.css';
import imagemX from '../../img/x-circle.svg'
import imagemAceitar from "../../img/check-circle.svg";
import axios from 'axios';
import { useState } from 'react';


function RegistrosJustificativa({id, dt_registro, funcionario, data, horario, justificativa, arquivo, operacoes}){
    const [update, setUpdate] = useState(true);

  const handleDeleteClick = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/justificativa`, {
        operacao: "rejeitar",
        dt_registro: data,
        cd_funcionario: id,
      });

      setUpdate(false);
    } catch (error) {
      console.error("Erro ao atualizar o item:", error);
    }
  };

   const handleAceitar = async () => {
     try {
       await axios.put(`http://127.0.0.1:8000/api/justificativa`, {
         operacao: "aceitar",
         dt_registro: data,
         cd_funcionario: id,
       });

       setUpdate(false);
     } catch (error) {
       console.error("Erro ao atualizar o item:", error);
     }
   };


 return update ? (
    <div className={styles.grid}>
      <span>{funcionario}</span>
      <span>{data}</span>
      <span>{horario}</span>
      <span>{justificativa}</span>
      <span>{arquivo}</span>
      <div className={styles.operacoes}>
        <img className={styles.img1} src={imagemX} alt="Rejeitar" onClick={handleDeleteClick} />
        <img className={styles.img2} src={imagemAceitar} alt="Aceitar" onClick={handleAceitar} />
      </div>
    </div>
  ) : null;
}


export default RegistrosJustificativa;
