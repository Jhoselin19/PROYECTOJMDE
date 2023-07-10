import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Login} from './components/Login'
import { Registrar } from './components/Registrar'
import { Reserva } from './components/Reserva';
import { Inicio } from './components/Inicio';
import { Contactos } from './components/Contactos';
import { Psicologia } from './components/Psicologia';
import { Medicina } from './components/Medicina';
import { Nosotros } from './components/Nosotros';
import { Factura } from './components/Factura';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Inicio" element={<Inicio/>}/>
        <Route exact path="/Registrar" element={<Registrar/>}/>
        <Route exact path="/Reserva" element={<Reserva/>}/>
        <Route exact path="/Contactos" element={<Contactos/>}/>
        <Route exact path="/Psicologia" element={<Psicologia/>}/>
        <Route exact path="/Medicina" element={<Medicina/>}/>
        <Route exact path="/Nosotros" element={<Nosotros/>}/>
        <Route exact path="/factura/:id" element={<Factura />}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
