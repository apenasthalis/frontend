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

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/selecionarfuncionario" element={<SelecionarFuncionario />} />
        <Route path="/registrofotografico" element={<RegistroFotografico />} />
       <Route path="/login" 
         element={<Login setIsAuthenticated={setIsAuthenticated} />}
         />
        <Route path="/relatorio" 
         element={<PrivateRoute element={<Relatorio />} isAuthenticated={isAuthenticated} />}
         />
        <Route path="/daily" element={<Daily/>}/>
      </Routes>
    </Router>
  );
}

export default App;
