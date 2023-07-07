import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import backgroundImage from './img/iniciotec.png';
import "./css/TuPagina.css";

export const Inicio = () => {
  return (
    <div className="pagina_inicio">
      <div id="caja_menu" style={{ textAlign: "left" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: 0 }}>
          <div className="container-fluid">
            <label className="navbar-brand h5" href=" ">TECSUP</label>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="/inicio" className="nav-link h5 text-center" activeClassName="active">Inicio</NavLink>
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle h5 text-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Especialidades
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to="/psicologia" className="dropdown-item" activeClassName="active">Psicologia</NavLink></li>
                    <li><NavLink to="/medicina" className="dropdown-item" activeClassName="active">Medicina</NavLink></li>
                  </ul>
                </div>
                <NavLink to="/reserva" className="nav-link h5 text-center" activeClassName="active">Reserva</NavLink>
                <NavLink to="/" className="nav-link h5 text-center">
                  Salir
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-closed-fill" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                </NavLink>

              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="content">
        <h1 className="text-center display-4">Topico Tecsup</h1>
        <p className="text-center h4">Pensando en tu bienestar y salud. Trabajando con el mejor equipo</p>
        <div className="form-group mt-4 text-center">
          <NavLink className="btn btn-success mx-2" to="/Contactos">Contactanos</NavLink>
          <NavLink className="btn btn-success mx-2" to="/Nosotros">Nosotros</NavLink>
        </div>
      </div>

      <div class="footer">
        &copy; 2021, Tecsup. All Rights Reserved.
      </div>
    </div>
  );
};
