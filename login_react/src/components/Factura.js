import React, { useEffect, useState } from 'react';
import { useParams, useNavigate   } from 'react-router-dom';
import logoEmpresa from "./img/tecsup.png";
import './css/factura.css'
export const Factura = () => {
  const { id } = useParams();
  const [reserva, setReserva] = useState(null);
  const navigate = useNavigate();

  const handleRegresar = () => {
    navigate(-1); // Regresar a la página anterior
  };

  useEffect(() => {
    fetch(`http://localhost:8081/api/v1/reservas/${id}`)
      .then(response => response.json())
      .then(data => {
        setReserva(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);

  if (!reserva) {
    return <div>Cargando reserva...</div>;
  }

  return (
    <div className="factura-container">
      <div className="factura-header">
        <img src={logoEmpresa} alt="Logo Empresa" className="logo-empresa" />
        <h1>Factura de Reserva</h1>
      </div>
      <div className="factura-info">
        <div className="factura-info-cliente">
          <h2>Cliente:</h2>
          <p>Nombre: {reserva.nombre}</p>
          <p>Apellidos: {reserva.apellidos}</p>
        </div>
        <div className="factura-info-empresa">
          <h2>Empresa:</h2>
          <p>Nombre: Tecsup</p>
          <p>Dirección: Av.cascanueces</p>
          <p>Teléfono: 678-7382-23</p>
        </div>
      </div>
      <table className="factura-table">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fecha</td>
            <td>{reserva.fecha}</td>
          </tr>
          <tr>
            <td>Horario</td>
            <td>{reserva.horario}</td>
          </tr>
          <tr>
            <td>Especialidad</td>
            <td>{reserva.especialidad.nombre}</td>
          </tr>
          <tr>
            <td>Médico</td>
            <td>{reserva.especialidad.encargado}</td>
          </tr>
          {/* Aquí puedes agregar más filas de la tabla con otros detalles */}
        </tbody>
      </table>
      <div className="factura-total">
        <h3>Total: $10.00</h3>
      </div>
      <div className="factura-footer">
        <p>Gracias por su reserva. Para cualquier consulta, comuníquese con nosotros.</p>
        <p>Teléfono: Teléfono de la Empresa</p>
        <p>Correo electrónico: correo@empresa.com</p>
      </div>
      <button className="regresar-button" onClick={handleRegresar}>Regresar</button>
    </div>
  );
};