import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tecsupLogo from "./img/tecsup.png";
import "./css/registro.css";

export const Registrar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [carrera, setCarrera] = useState("");
  const [ciclo, setCiclo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const botonRegistrar = (e) => {
    e.preventDefault();
    var miObjeto = { nombres, apellidos, dni, carrera, ciclo, telefono, correo, password };

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const esCorreoValido = correoRegex.test(correo) && correo.endsWith("@tecsup.edu.pe");

    if (esCorreoValido) {
      setRegistrosLogin([...registroslogin, miObjeto]);
      limpiarFormulario();
    } else {
      alert("El correo ingresado no es válido. Asegúrate de que termine en '@tecsup.edu.pe'.");
    }
  }

  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] );

  const limpiarFormulario = () => {
    setNombres("");
    setApellidos("");
    setDni("");
    setCarrera("");
    setCiclo("");
    setTelefono("");
    setCorreo("");
    setPassword("");
    document.getElementById("miFormulario").reset();
  }

  return (
    <div className="loginBody">
      <div className="container col-6"> 
        <div className="formContainer">
          <img src={tecsupLogo} alt="Logo de Tecsup" className="mb-4 mt-5" />
          <h1>CitasTec</h1><br/>
          <form id="miFormulario" onSubmit={botonRegistrar}>
            <div className="row">
              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="text" placeholder="Nombres" onChange={(e) => setNombres(e.target.value)} required />
              </div>
              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="text" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)} required />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mt-4">
                <input className="form-control form-control-lg text-center" type="text" placeholder="DNI" onChange={(e) => setDni(e.target.value)} required />
              </div>
              <div className="col-6 mt-4">
              <select className="form-select form-select-lg text-center" onChange={(e) => setCarrera(e.target.value)} required>
                <option value="">Carrera</option>
                <option value="ProcesosQuimicos">Procesos Químicos y Metalúrgicos</option>
                <option value="GestionMaquinariaPesada">Gestión y Mantenimiento de Maquinaria Pesada</option>
                <option value="GestionMaquinariaIndustrial">Gestión y Mantenimiento de Maquinaria Industrial</option>
                <option value="ElectricidadIndustrial">Electricidad Industrial con mención en Sistemas Eléctricos de Potencia</option>
                <option value="ElectronicaAutomatizacion">Electrónica y Automatización Industrial</option>
                <option value="RedesComunicaciones">Administración de Redes y Comunicaciones  </option>
                <option value="OperacionesMineras">Operaciones Mineras</option>
                <option value="ProduccionGestion">Producción y Gestión Industrial</option>
                <option value="AvionicaMecanicaAeronautica">Aviónica y Mecánica Aeronáutica</option>
                <option value="DisenoDesarrolloSoftware">Diseño y Desarrollo de Software</option>
                <option value="MecatronicaIndustrial">Mecatrónica Industrial</option>
                <option value="DisenoDesarrolloSimuladoresVideojuegos">Diseño y Desarrollo de Simuladores y Videojuegos</option>
                <option value="DisenoIndustrial">Diseño Industrial</option>
                <option value="BigDataCienciaDatos">Big Data y Ciencia de Datos</option>
                <option value="AdministracionDatos">Administración de Datos</option>
                <option value="LogisticaDigitalIntegrada">Logística Digital Integrada</option>
                <option value="ModeladoAnimacionDigital">Modelado y animación digital</option>
                <option value="InstrumentacionIndustrial">Instrumentación industrial</option>
                <option value="MecanicaIndustrial">Mecánica industrial</option>
                <option value="TelecomunicacionesVozDatos">Sistema de telecomunicaciones de voz y datos</option>
                <option value="SeguridadSaludTrabajo">Prevención de la seguridad y salud en el trabajo</option>
                <option value="MecanicaEquipoPesado">Mecánica de equipo pesado</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-4">
              <select className="form-select form-select-lg text-center"  onChange={(e) => setCiclo(e.target.value)} required>
                <option value="">Ciclo</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="IV">IV</option>
                <option value="VI">VI</option>
              </select>
              </div>
              <div className="col-6 mt-4">
                <input className="form-control form-control-lg text-center" type="text" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} required />
              </div>
            </div>
            <div className="row">
              <div className="col-6 mt-4">
                <input className="form-control form-control-lg text-center" type="email" placeholder="Correo electronico" onChange={(e) => setCorreo(e.target.value)} required />
              </div>
              <div className="col-6 mt-4">
                <input className="form-control form-control-lg text-center" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>
            <div className="row mb-5">
              <div  className="d-grid gap-2 col-8 mx-auto mt-5">
                <input type="submit" className="btn btn-primary btn-lg" value="Registrar" />
                <Link className="btn btn-outline-secondary btn-lg" to="/">Regresar</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
