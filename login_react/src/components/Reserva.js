import React from 'react';
import { NavLink } from 'react-router-dom';

export const Reserva = () => {

  return (
    <body>
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
        </div><br></br>

        <div class="row">

            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">

                <div class="card mt-3">
                    <div class="card-body">
                        <form action="/" method="">
                        <h2>Datos de la Reserva</h2><br></br>
                            <div class="form-group">
                                <input type="text" id="txtnombre" name="txtnombre" placeholder="Nombre" class="form-control"></input>
                            </div>
                            <div class="form-group mt-2">
                                <input type="text" id="txtapellido" name="txtapellido" placeholder="Apellido" class="form-control"></input>
                            </div>
                            <div class="form-group mt-2">
                                <input type="text" id="txttelefono"  name="txttelefono" placeholder="Telefono" class="form-control"></input>
                            </div> 
                            <div class="form-group mt-2" required>
                                <div class="custom-select-arrow">
                                    <select name="txtcurso" class="form-group form-control custom-select" id="txtcurso">
                                        <option value="">Especialidad</option>
                                        <option value="psicologia">Psicologia</option>
                                        <option value="medicina">Medicina</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group mt-2">
                                <input type="date" id="txtingreso"  name="txtingreso" placeholder="ingreso" class="form-control"></input>
                            </div>  
                            <div class="form-group mt-4">
                                <button type="submit" class="btn btn-success">Reservar</button>
                            </div>
                            <div class="form-group mt-2">
                                <button type="submit" class="btn">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-8 col-xl-8">
                <h1>Registro de Reserva de citas</h1>
                <div class="table-responsive py-2">
                    <table class="table table-primary">
                        <thead>
                            <tr>
                                <th>Cita</th>
                                <th>Fecha - Hora</th>
                                <th>Información</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </body>
  );
};