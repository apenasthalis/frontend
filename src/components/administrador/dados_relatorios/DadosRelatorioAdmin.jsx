import { useEffect, useState } from 'react';
import SelectAno from '../../form/SelectAno';
import SelectTransparent from '../../form/SelectTransparent';
import styles from './DadosRelatorioAdmin.module.css'
import BancodeHoras from '../../min/BancodeHoras';
import immg from "../../img/flag.svg";
import imml from "../../img/briefcase.svg";
import imgh from "../../img/alert-triangle.svg";
import imgg from "../../img/clock.svg";
import RegistrosAdmin from './RegistrosAdmin';
import InputFuncionario from './InputFuncionario';

function DadosRelatorioAdmin(){

const [cd_funcionario, setCd_funcionario] = useState(null);
const [anoSelecionado, setAnoSelecionado] = useState("");
const [mesSelecionado, setMesSelecionado] = useState("");
const [dados, setDados] = useState([0]);
const userId = localStorage.getItem("user_id");



const buscarDadosHorasUsuario = async () => {
  // if (!anoSelecionado || !mesSelecionado || !userId) {
  //   console.error("Ano, mês ou ID do usuário não definidos");
  //   return;
  // }

  const apiUrl = `http://127.0.0.1:8000/api/cargahorariafuncionario/${cd_funcionario}/${anoSelecionado}/${mesSelecionado}`;

  try {
    const { data } = await axios.get(apiUrl, {
      params: {
        id: cd_funcionario,
        ano: anoSelecionado,
        mes: mesSelecionado,
      },
    });

    setDados(data);
    console.log("Data", data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

useEffect(() => {
  buscarDadosHorasUsuario();
}, [anoSelecionado, mesSelecionado, cd_funcionario]);

const handleAnoChange = (event) => {
  setAnoSelecionado(event.target.value);
};

const handleMesChange = (event) => {
  setMesSelecionado(event.target.value);
};

const handleFuncionarioSelecionado = (cd_funcionario) => {
  setCd_funcionario(cd_funcionario);
};

   return (
    <div className={styles.divcinza}>
      <nav className={styles.navs}>
        <h3 className={styles.title}>Relatórios</h3>
        <div className={styles.selects}>
            <InputFuncionario funcionarioSelecionado={handleFuncionarioSelecionado}/>
          <SelectTransparent mesSelecionado={mesSelecionado} onMesChange={handleMesChange}/>
          <SelectAno anoSelecionado={anoSelecionado} onAnoChange={handleAnoChange} />
        </div>
      </nav>
      <div className={styles.minidiv}>
        <div className={styles.dual}>
          <BancodeHoras img={immg} txt={"Expectativa: 184:00:00"} />
          <BancodeHoras
            img={imml}
            txt={"Horas Trabalhadas: 24:00:00 de 32:00:00"}
          />
        </div>
        <div className={styles.dual}>
          <BancodeHoras img={imgh} txt={"devendo: 00:00"} />
          <BancodeHoras img={imgg} txt={"Banco de Horas: " + dados.resultado} />
        </div>
      </div>
      <div className={styles.dados}>
        <RegistrosAdmin cd_funcionario={cd_funcionario} anoSelecionado={anoSelecionado} mesSelecionado={mesSelecionado} />
      </div>
    </div>
  );
}


export default DadosRelatorioAdmin;