import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImage from './img/iniciotec.png';
import "./css/TuPagina.css";

export const Inicio = () => {
  return (
    <div className="pagina">
      <div id="caja_menu" style={{ textAlign: "left" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: 20 }}>
          <div className="container-fluid">
            <label className="navbar-brand h5" href=" ">TECSUP</label>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="/Inicio" className="nav-link h5 text-center" activeClassName="active">Inicio</NavLink>
                <NavLink to="/" className="nav-link h5 text-center" activeClassName="active">Nosotros</NavLink>
                <NavLink to="/" className="nav-link h5 text-center" activeClassName="active">Perfil</NavLink>
                <NavLink to="/Reserva" className="nav-link h5 text-center" activeClassName="active">Reserva</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="content">
        <h1 className="text-center display-4">Topico Tecsup</h1>
        <p className="text-center h4">Pensando en tu bienestar y salud. Trabajando con el mejor equipo</p>
        <div className="form-group mt-4 text-center">
          <button type="submit" className="btn btn-success mx-2">Contactanos</button>
          <button type="submit" className="btn btn-success mx-2">Especialidades</button>
        </div>
      </div>

    </div>
  );
};
