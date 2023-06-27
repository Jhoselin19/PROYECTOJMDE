import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./css/contactos.css";
export const Contactos = () => {
  return (
    <html>
    <head>

    </head>
    <body>
    <div class="pagina_contactos">
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

        <div class="contenido">
        <div class="rectangulo">
            <h2>Datos de contacto:</h2>
            <ul>
            <li>Celular: 983752528</li>
            <li>Teléfono: +5165234273</li>
            <li>E-mail: tec.topic@tecsup.edu.pe</li>
            </ul>
        </div>
        </div>

        <div class="footer">
        &copy; 2021, Tecsup. All Rights Reserved.
        </div>
    </div>
    </body>
    </html>

  );
};
