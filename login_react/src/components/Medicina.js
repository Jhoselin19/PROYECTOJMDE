import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/nosotros.css";

export const Medicina = () => {
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
            <div className="col-md-5">
            <div className="elementor-widget-container"> 
              <div className="elementor-element elementor-element-2ab0cf2 elementor-widget elementor-widget-heading" data-id="2ab0cf2" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container" style={{ textAlign: "left", color:"blue"}}>
                  <p className="elementor-heading-title elementor-size-default"><strong>Especialidad medicina</strong></p>
                </div>
              </div>
              <div className="elementor-widget-container" style={{ textAlign: "left" }}>
                <div className="elementor-text-editor elementor-clearfix">
                  <h2><strong>Correspondiente a la rama fundamental de la medicina que se encarga de brindar atención integral a los pacientes, abarcando un amplio espectro de enfermedades y condiciones médicas.  </strong></h2>
                </div><br></br>
                <div className="elementor-text-editor elementor-clearfix" style={{ textAlign: "left" }}>
                  <p><strong>¿Qué hacemos?</strong></p>
                  <p>Realiza exámenes médicos periódicos, evalúa el crecimiento y desarrollo de los estudiantes, y administra vacunas y tratamientos para prevenir y controlar enfermedades.

Además, el médico se ofrece asesoramiento y educación sobre temas relacionados con la salud, como la nutrición, la actividad física, la salud mental y el manejo del estrés. También se interviene en situaciones de emergencia, brindar primeros auxilios y referir a los estudiantes a especialistas médicos cuando sea necesario.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="elementor-widget-container">
              <div className="elementor-image">
                <img src="https://librosmedicos.pe/wp-content/uploads/2022/11/Libros-de-medicina-2.jpg" alt="" loading="lazy" style={{ width: "100%" }} />
                <img src="https://images.ctfassets.net/szez98lehkfm/471yRy23NAZm43RZ6AkxBz/f32929bbe2747190eeefe14670cf8c28/MyIC_Inline_79122" alt="" loading="lazy"style={{ width: "100%" }}  />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="elementor-widget-container">
              <div className="elementor-image">
              <img src="https://images.ctfassets.net/szez98lehkfm/471yRy23NAZm43RZ6AkxBz/f32929bbe2747190eeefe14670cf8c28/MyIC_Inline_79122" alt="" loading="lazy"style={{ width: "100%" }}  />
              <img src="https://librosmedicos.pe/wp-content/uploads/2022/11/Libros-de-medicina-2.jpg" alt="" loading="lazy" style={{ width: "100%" }} />
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
