import { useEffect, useState } from 'react';
import styles from './ModalAdm.module.css'
import Botao from '../../form/Botao';
import BotaoBranco from '../../form/BotaoBranco';
import InputText from '../../../modal/InputText';
import imgg from '../../img/info.svg'
import imga from "../../img/Union2.svg";
import axios from 'axios';


function ModalAdm({isOpen, onRequestClose}) {
  const [users, setUsers] = useState([0]);
 const [newUserData, setNewUserData] = useState({
   nome: "",
   cpf: "",
   dataAdmissao: "",
   email: "",
   senha: "",
   podeBaterForaDaRede: false,
   imagem: null,
 });

 const handleConfirmarClick = () => {
   const formData = new FormData();

   formData.append("nome", newUserData.nome);
   formData.append("cpf", newUserData.cpf);
   formData.append("dataAdmissao", newUserData.dataAdmissao);
   formData.append("email", newUserData.email);
   formData.append("senha", newUserData.senha);
   formData.append("podeBaterForaDaRede", newUserData.podeBaterForaDaRede);

   if (newUserData.imagem) {
     formData.append("imagem", newUserData.imagem);
   }

   axios
     .post("http://127.0.0.1:8000/api/funcionario", formData)
     .then((response) => {
       console.log("Dados enviados com sucesso:", response.data);
     })
     .catch((error) => {
       console.error("Erro ao enviar dados:", error);
     });
 };


 

  const handleNomeChange = (e) =>
    setNewUserData({ ...newUserData, nome: e.target.value });

  const handleCPFChange = (e) =>
    setNewUserData({ ...newUserData, cpf: e.target.value });

    const handleDataAdmissaoChange = (e) =>
      setNewUserData({ ...newUserData, dataAdmissao: e.target.value });

    const handleEmailChange = (e) =>
      setNewUserData({ ...newUserData, email: e.target.value });

    const handleSenhaChange = (e) =>
        setNewUserData({ ...newUserData, senha: e.target.value });

    const handleBaterPontoChange = (e) =>
        setNewUserData({ ...newUserData, podeBaterForaDaRede: e.target.checked });

const handleImagemChange = (e) =>
  setNewUserData({ ...newUserData, imagem: e.target.files[0] });

        
  return (
    isOpen && (
      <div
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
        className={styles.modal}
      >
        <div className={styles.modal_container}>
          <nav className={styles.nav}>
            <h1>Adicionar Funcionário</h1>
            <hr />
          </nav>
          <div className={styles.body}>
            <div className={styles.mid}>
              <InputText
                label={"Nome"}
                type={"text"}
                placeholder={newUserData.nome}
                onChange={handleNomeChange}
                value={"Nome..."}
              />
              <InputText
                label={"CPF"}
                type={"text"}
                placeholder={newUserData.cpf}
                onChange={handleCPFChange}
                value={"CPF..."}
              />
            </div>
            <div className={styles.div}>
              <InputText
                label={"Data de Admissão"}
                type={"date"}
                value={"aaaa/mm/dd"}
                placeholder={newUserData.dataAdmissao}
                onChange={handleDataAdmissaoChange}
              />
            </div>
            <div className={styles.divEmail}>
              <InputText
                label={"E-mail"}
                type={"email"}
                onChange={handleEmailChange}
                placeholder={newUserData.email}
                value={"E-mail..."}
              />
              <div className={styles.credentials}>
                <img src={imgg} alt="" />
                <span>
                  O usuário receberá as credenciais de acesso no e-mail
                  cadastrado
                </span>
              </div>
            </div>
            <div className={styles.password}>
              <InputText
                label={"Senha"}
                type={"text"}
                placeholder={newUserData.senha}
                onChange={handleSenhaChange}
                value={"Senha..."}
              />
            </div>
            <div className={styles.daily}>
              <input
                checked={newUserData.podeBaterForaDaRede}
                onChange={handleBaterPontoChange}
                type="checkbox"
                name=""
                id="ah"
              />
              <span>Pode bater fora da rede</span>
            </div>
            <div className={styles.image}>
              <form className={styles.form} encType="multipart/form-data">
                <div className={styles.spana}>
                  <div className={styles.picture}>
                    <img src={imga} alt="" />
                  </div>
                  <br />
                  <span className={styles.desc}>Foto do Usuário</span>
                </div>
                <input
                  type="file"
                  name="imagem"
                  id="seletor-imagem"
                  // onChange={handleArquivoChange}
                  accept="image/*"
                  onChange={handleImagemChange}
                />
                <hr />
              </form>
            </div>
            <div className={styles.down}>
              <Botao onClick={handleConfirmarClick} />
              <BotaoBranco onClick={onRequestClose} text={"Cancelar"} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalAdm;
