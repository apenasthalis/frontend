import axios from 'axios';
import styles from './InputFuncionario.module.css'
import { useEffect, useState } from 'react';

function InputFuncionario({funcionarioSelecionado}){

    const [dados, setDados] = useState([])
    const apiUrl = `http://127.0.0.1:8000/api/funcionario`;


     useEffect(() => {
       const fetchData = async () => {
         try {
           const { data } = await axios.get(apiUrl);
           setDados(data);
         } catch (error) {
           console.log("Erro ao buscar dados:", error);
         }
       };

       fetchData();
     }, []);

const handleFuncionarioChange = (event) => {
  const cdFuncionarioSelecionado = event.target.value;
  funcionarioSelecionado(cdFuncionarioSelecionado);
};

    return (
      <>
        <select className={styles.selectu} name="func" id="func" onChange={handleFuncionarioChange}>
            {dados.map((item)=>
          <option key={item.cd_funcionario} value={item.cd_funcionario}> {item.no_funcionario}</option>
            )}

        </select>
      </>
    );
}

export default InputFuncionario;
