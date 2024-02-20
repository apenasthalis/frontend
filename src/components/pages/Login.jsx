import styles from "./Login.module.css";
import Botao from "../form/Botao";
import BotaoBranco from "../form/BotaoBranco";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = ({ setIsAuthenticated }) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleNomeUsuarioChange = (event) => {
    setLogin(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const enviarDadosParaBackend = () => {
    axios
      .post("http://127.0.0.1:8000/api/login", { login, senha })
      .then((response) => {
        console.log(response.data);

        const { token, user_id } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);

        setIsAuthenticated(true);

        navigate("/relatorio");
      })
      .catch((error) => {
        console.error("Erro ao enviar dados para o backend:", error);
      });
  };

  return (
    <div className={styles.div1}>
      <h1 className={styles.title09}>Leopard</h1>
      <div className={styles.divlabel}>
        <label className={styles.label} htmlFor="nome">
          Usuário
        </label>
        <input
          id="login"
          className={styles.escrever}
          name="nome"
          value={login}
          type="text"
          placeholder="Nome..."
          onChange={handleNomeUsuarioChange}
        />
        <label className={styles.label} htmlFor="nao">
          Senha
        </label>
        <input
          id="senha"
          className={styles.escrever}
          name="nao"
          onChange={handleSenhaChange}
          value={senha}
          type="password"
          placeholder="Senha..."
        />
        <Botao onClick={enviarDadosParaBackend} text={"Entrar"} />
      </div>
      <Link to="/funcionario">
        <BotaoBranco text={"Voltar"} />
      </Link>
    </div>
  );
};

export default Login;
