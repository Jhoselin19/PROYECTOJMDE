
import { NavLink, Link  } from 'react-router-dom';
import "./css/reserva.css";
import React, { useState, useEffect } from 'react';

export const Reserva = () => {
  const [reservas, setReservas] = useState([]); // Estado para almacenar las reservas

  useEffect(() => {
    // Realizar la solicitud GET a la API de Spring para obtener las reservas
    fetch('http://localhost:8081/api/v1/reservas/lista')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al obtener las reservas.');
        }
      })
      .then(data => {
        setReservas(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      txtnombre,
      txtapellidos,
      txttelefono,
      txtespecialidad,
      txtingreso,
      txthora
    } = event.target.elements;

    // Mostrar el aviso de confirmación
  const confirmMessage = `¿Estás seguro de realizar tu reservar para el día ${txtingreso.value}?`;
  if (!window.confirm(confirmMessage)) {
    return; // Si el usuario cancela, no se realiza la reserva
  }
  
    const reserva = {
      nombre: txtnombre.value,
      apellidos: txtapellidos.value,
      telefono: txttelefono.value,
      especialidad: { id: parseInt(txtespecialidad.value), nombre: txtespecialidad.options[txtespecialidad.selectedIndex].text },
      fecha: txtingreso.value,
      horario: txthora.value
    };
  
    // Realizar la solicitud POST a la API para guardar la reserva
    fetch('http://localhost:8081/api/v1/reservas/guardar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reserva)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          // Reserva guardada exitosamente, actualizar el estado de las reservas
          setReservas([...reservas, data]);
        } else {
          // Ocurrió un error al guardar la reserva, mostrar mensaje de error
          alert('No se pudo guardar la reserva. Por favor, elija otro horario.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    // Limpiar los campos del formulario
    event.target.reset();
  };


  return (
    <html>
    <head>

    </head>
    <body>
        <div class="pagina_reserva">
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

        <div class="row mt-5">
            <div class="col-sm-12 col-md-9 col-lg-4 col-xl-4">
              <div class="card mt-3">
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <h2>Datos de la Reserva</h2><br></br>
                    <div class="form-group">
                      <input type="text" id="txtnombre" name="txtnombre" placeholder="Nombre" class="form-control"></input>
                    </div>
                    <div class="form-group mt-2">
                      <input type="text" id="txtapellidos" name="txtapellidos" placeholder="Apellidos" class="form-control"></input>
                    </div>
                    <div class="form-group mt-2">
                      <input type="text" id="txttelefono" name="txttelefono" placeholder="Telefono" class="form-control"></input>
                    </div>
                    <div class="form-group mt-2" required>
                                <div class="custom-select-arrow">
                                    <select name="txtespecialidad" class="form-group form-control custom-select" id="txtespecialidad">
                                        <option value="">Especialidad</option>
                                        <option value="2">Psicologia</option>
                                        <option value="1">Medicina</option>
                                    </select>
                                </div>
                            </div>
                    <div class="form-group mt-2">
                      <input type="date" id="txtingreso" name="txtingreso" placeholder="Ingreso" class="form-control"></input>
                    </div>
                    <div class="form-group mt-2">
                      <input type="time" id="txthora" name="txthora" placeholder="Hora" class="form-control"></input>
                    </div>
                    <div class="form-group mt-4">
                      <button type="submit" class="btn btn-success">Reservar</button>
                    </div>
                    <div class="form-group mt-2">
                      <button type="reset" class="btn">Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-7 col-xl-7">
              <h1><u> MIS RESERVAS</u></h1>
              <div class="table-responsive py-2">
                <table class="table table-light">
                  <thead className="table-success">
                    <tr>
                      <th>Cita</th>
                      <th>Fecha - Hora</th>
                      <th>Especialidad</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservas.map((reserva, index) => (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{reserva.fecha && reserva.horario ? `${reserva.fecha} - ${reserva.horario}` : ''}</td>
                      <td>{reserva.especialidad && reserva.especialidad.nombre}</td>
                      <td>
                      <Link to={`/factura/${reserva.id}`} className="btn btn-primary">Ver factura</Link>
                      </td>

                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="footer">
              &copy; 2021, Tecsup. All Rights Reserved.
            </div>

            
          </div>
        </div>
      </body>
    </html>

  );
};