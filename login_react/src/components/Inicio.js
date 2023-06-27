import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import backgroundImage from './img/iniciotec.png';
import "./css/TuPagina.css";

export const Inicio = () => {
  return (
    <html>
    <head>

    </head>
    <body>
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
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Especialidades
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/psicologia">Psicologia</a></li>
                    <li><a class="dropdown-item" href="/medicina">Medicina</a></li>
                  </ul>
                </li>
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
          <Link className="btn btn-success mx-2" to="/Contactos">Contactanos</Link>
          <Link className="btn btn-success mx-2" to="">Nosotros</Link>
        </div>
      </div>

    </div>
    </body>
    </html>
  );
};
