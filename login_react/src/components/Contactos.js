import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/contactos.css";

export const Contactos = () => {
  return (
    <div className="pagina_contactos">
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
      </div><br></br>

      <div className="contenido-superior" style={{ textAlign: "left" }}>
      <u><h1>Contactanos</h1></u><br></br>
        <p style={{ fontSize: "20px" }}><strong>¿Cómo podemos ayudarte?</strong></p>
      </div>

      <div className="container_rectangulos">
        <div className="row">
          <div className="col-md-3 rectangulo-largo">
            <div className="rectangulo">
              <div className="icono">
               <img src="https://assets.stickpng.com/images/5a4525cd546ddca7e1fcbc84.png" alt="" loading="lazy" style={{ width: "15%" }} />
              </div>
              <div className="contenido">
                <p style={{ textAlign: "left"}}><strong>Llamanos</strong></p>
                <p style={{ textAlign: "left" , color: "blue" }}>
                  <span style={{color: "black"}}>Teléfono: </span>
                  <strong>8-586-258</strong>
                </p>
                <p style={{ textAlign: "left" , color: "blue" }}>
                  <span style={{color: "black"}}>Celular: </span>
                  <strong>987-983-345</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="rectangulo">
              <div className="icono">
               <img src="https://cdn-icons-png.flaticon.com/512/4187/4187236.png" alt="" loading="lazy" style={{ width: "21%" }} />
              </div>
              <div className="contenido">
                <p style={{ textAlign: "left"}}><strong>Buscanos</strong></p>
                <p style={{ textAlign: "left" , color: "blue" }}><strong>http://Tecsup.edu.pe</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="rectangulo">
              <div className="icono">
               <img src="https://cdn-icons-png.flaticon.com/512/4804/4804075.png" alt="" loading="lazy" style={{ width: "22%" }} />
              </div>
              <div className="contenido">
                <p style={{ textAlign: "left"}}><strong>E-mail</strong></p>
                <p style={{ textAlign: "left" , color: "blue" }}><strong>topico@tecsup.edu.pe</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        &copy; 2021, Tecsup. All Rights Reserved.
      </div>
    </div>
  );
};
