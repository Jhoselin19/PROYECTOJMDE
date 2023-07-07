import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tecsupLogo from "./img/tecsup.png";
import tecsupTopico from "./img/topico.png";
import "./css/login.css";
import { Inicio } from './Inicio';

export const Login = () => {
  const [miLogin, setMiLogin] = useState(false);
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    if (usu.length === 0 || pas.length === 0) {
      alert("Complete los datos faltantes!!");
    } else {
      const registros = obtenerRegistros();
      const usuarioEncontrado = registros.find(registro => registro.dni === usu && registro.password === pas);

      if (usuarioEncontrado) {
        setMiLogin(true);
      } else {
        setMiLogin(false);
        alert("Error de Usuario y/o Contraseña");
        setUsu("");
        setPas("");
      }
    }
  }

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    } else {
      return [];
    }
  }

  if (miLogin === true) {
    return <Inicio />;
  }

  return (
    <div className=" login_cuerpo login-container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="contenedorCentral col-md-12 overflow-auto">
          <div className="container-wrapper d-flex flex-column justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-end pr-4">
                <div className="imageContainer d-flex align-items-stretch">
                  <img src={tecsupTopico} alt="Topico de Tecsup" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-5 d-flex justify-content-start pl-4">
                <div className="formContainer d-flex flex-column justify-content-center">
                  <img src={tecsupLogo} alt="Logo de Tecsup" className="mb-3" />
                  <h1>CitasTec</h1>
                  <br />
                  <form onSubmit={iniciarSesion}>
                    <div className="col-md-10  mx-auto text-center">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        id="txtusu"
                        placeholder="DNI"
                        value={usu}
                        onChange={(e) => setUsu(e.target.value)}
                        required
                      />
                    </div>
                    <br />
                    <div className="col-md-10  mx-auto text-center">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        id="txtpas"
                        placeholder="Contraseña"
                        value={pas}
                        onChange={(e) => setPas(e.target.value)}
                        required
                      />
                    </div>
                    <br />
                    <div className="d-grid gap-2 col-10 mx-auto">
                      <input type="submit" className="btn btn-primary btn-lg" value="Iniciar Sesión" />
                    </div>
                    <br />
                  </form>
                  <p>¿No tiene una cuenta? <Link to="/Registrar">Crear una cuenta</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
