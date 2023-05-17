import React from 'react'

const styles = {
    containerWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    container: {
      background: 'lightgray',
      marginTop: 60,
      padding: 150,
      marginRight: 250,
    },
  };

export const Login = () => {
    return (
        
        <div style={styles.containerWrapper}>
      <div style={styles.container}>
        <form id="form_login">
          <div>
            <h1 style={{ textAlign: "center" }}>CitasTec</h1>
            <br />
          </div>
          <div>
            <input className="form-control form-control-lg " type="text" placeholder="Usuario" required />
          </div><br />
          <div>
            <input className="form-control form-control-lg" type="text" placeholder="Contraseña" required />
          </div><br />
          <div>
          <input type="submit" className="btn btn-primary" value="Iniciar Sesión" />
          </div><br/>
            <p>¿No tiene una cuenta? <a href="/#">Crear una cuenta</a></p>
        </form>
      </div>
    </div>
    )
}