import React from 'react';
import { NavLink } from 'react-router-dom';
import tecsupNosotros from "./img/nosotro.avif";
import tecsupNosotro from "./img/tecnosotros.jpg";
import "./css/nosotros.css";

export const Nosotros = () => {
  return (
    <div className="pagina_nosotros" style={{ textAlign: "center", margin: "auto" }}>
      <div style={{ textAlign: "left" }}>
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

      <div className="container-fluid container-cuerp">
        <div className="row">
          <div className="col-md-3">
            <div className="elementor-widget-container">
              <div className="elementor-image">
                <img src={tecsupNosotros} alt="" loading="lazy" width="400" height="500" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="elementor-widget-container">
              <div className="elementor-image">
                <img src={tecsupNosotro} alt="" loading="lazy" style={{ width: "71%" }} />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="elementor-widget-container">
              <div className="elementor-element elementor-element-2ab0cf2 elementor-widget elementor-widget-heading" data-id="2ab0cf2" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <p className="elementor-heading-title elementor-size-default">Quienes somos</p>
                </div>
              </div>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <h2><strong>¿Por qué nosotros?</strong></h2>
                </div>
                <div className="elementor-text-editor elementor-clearfix" style={{ textAlign: "left" }}>
                  <p><strong>Misión:</strong></p>
                  <p>Somos un Centro Médico certificado y especializado, brindamos atención integral en salud eficiente y oportuna con innovación permanente de procedimientos médicos; garantizando a los pacientes que su salud está en las mejores manos.</p>
                </div>
                <div className="elementor-text-editor elementor-clearfix" style={{ textAlign: "left" }}> 
                  <p><strong>Visión:</strong></p>
                  <p>Somos un Centro Médico certificado y especializado, brindamos atención integral en salud eficiente y oportuna con innovación permanente de procedimientos médicos; garantizando a los pacientes que su salud está en las mejores manos.</p>
                </div>
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
