import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import "./App.css";
import SelecionarFuncionario from "./components/pages/SelecionarFuncionario";
import Home from "./components/pages/Home";
import RegistroFotografico from "./components/pages/RegistroFotografico";
import Login from "./components/pages/Login";
import Relatorio from "./components/pages/Relatorio";
import Daily from "./components/pages/Daily";
import PrivateRoute from "./components/privateRoute/privateRoute";
import { useState } from "react";
import Funcionario from "./components/pages/admin/Funcionario";
import RelatoriosAdmin from "./components/pages/admin/RelatoriosAdmin";
import DailysAdmin from "./components/pages/admin/DailysAdmin";
import JustificativaAdmin from "./components/pages/admin/JustificativaAdmin";
import FeriadoAdmin from "./components/pages/admin/FeriadoAdmin";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/selecionarfuncionario/:id" element={<SelecionarFuncionario />} />
        <Route path="/registrofotografico/:id" element={<RegistroFotografico />} />
       <Route path="/login" 
         element={<Login setIsAuthenticated={setIsAuthenticated} />}
         />
        <Route path="/relatorio" 
         element={<PrivateRoute element={<Relatorio />} isAuthenticated={isAuthenticated} />}
         />
        <Route path="/daily" element={<Daily/>}/>
        <Route path="/funcionario" element={<Funcionario/>}/>
        <Route path="/relatorioadmin" element={<RelatoriosAdmin/>}/>
        <Route path="/dailysadmin" element={<DailysAdmin/>}/>
        <Route path="/justificativa" element={<JustificativaAdmin/>}/>
        <Route path="/feriado" element={<FeriadoAdmin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
