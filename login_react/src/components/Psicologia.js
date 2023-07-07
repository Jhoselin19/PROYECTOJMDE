import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/nosotros.css";

export const Psicologia = () => {
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
                  <p className="elementor-heading-title elementor-size-default"><strong>Especialidad Psicología</strong></p>
                </div>
              </div>
              <div className="elementor-widget-container" style={{ textAlign: "left" }}>
                <div className="elementor-text-editor elementor-clearfix">
                  <h2><strong> La psicología que se enfoca en brindar atención integral a los estudiantes, abordando una amplia gama de aspectos relacionados con su bienestar emocional y mental</strong></h2>
                </div><br></br>
                <div className="elementor-text-editor elementor-clearfix" style={{ textAlign: "left" }}>
                  <p><strong>¿Qué abarca la Psicología?</strong></p>
                  <p>El objetivo principal de la Psicología Estudiantil es evaluar y tratar los problemas psicológicos y emocionales que puedan afectar el rendimiento académico, la adaptación social y el bienestar general de los estudiantes. Se realizan evaluaciones psicológicas para identificar dificultades emocionales, trastornos del aprendizaje, problemas de comportamiento y otras preocupaciones relevantes para el desarrollo de los estudiantes.

Además, los psicólogos estudiantiles brindan apoyo y orientación a los estudiantes en áreas como el manejo del estrés, la ansiedad, la autoestima, la resolución de conflictos y el desarrollo de habilidades sociales. También pueden proporcionar servicios de asesoramiento individual o grupal, trabajando con los estudiantes para superar desafíos emocionales y promover el bienestar psicológico.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="elementor-widget-container">
              <div className="elementor-image">
                <img src="https://s1.abcstatics.com/media/familia/2019/06/02/CREBRO-ADOLESCENTE-kwZF--620x349@abc.jpg" alt="" loading="lazy" style={{ width: "100%" }} />
                <img src="https://www.psicologiamenssana.com/wp-content/uploads/2022/03/Los-problemas-de-conducta-m%C3%A1s-frecuentes-en-adolescentes-580x360.jpg" alt="" loading="lazy"style={{ width: "100%" }}  />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="elementor-widget-container">
              <div className="elementor-image">
              <img src="https://www.psicologiamenssana.com/wp-content/uploads/2022/03/Los-problemas-de-conducta-m%C3%A1s-frecuentes-en-adolescentes-580x360.jpg" alt="" loading="lazy"style={{ width: "100%" }}  />
              <img src="https://s1.abcstatics.com/media/familia/2019/06/02/CREBRO-ADOLESCENTE-kwZF--620x349@abc.jpg" alt="" loading="lazy" style={{ width: "100%" }} />
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
