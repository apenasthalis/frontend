import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import "./App.css";
import Corpo from "./components/layouts/Corpo";
import Navbar from "./components/layouts/Navbar";
import SelecionarFuncionario from "./components/pages/SelecionarFuncionario";
import Home from "./components/pages/Home";
import RegistroFotografico from "./components/pages/RegistroFotografico";
import Login from "./components/pages/Login";
import Relatorio from "./components/pages/Relatorio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/selecionarfuncionario" element={<SelecionarFuncionario />} />
        <Route path="/registrofotografico" element={<RegistroFotografico />} />
        <Route path="login" element={<Login/>}/>
        <Route path="relatorio" element={<Relatorio/>}/>

      </Routes>
    </Router>
  );
}

export default App;
