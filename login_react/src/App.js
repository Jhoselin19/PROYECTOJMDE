import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Login} from './components/Login'
import { Registrar } from './components/Registrar'
import { Reserva } from './components/Reserva';
import { Inicio } from './components/Inicio';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Inicio" element={<Inicio/>}/>
        <Route exact path="/Registrar" element={<Registrar/>}/>
        <Route exact path="/Reserva" element={<Reserva/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
