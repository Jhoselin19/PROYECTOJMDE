import React from 'react'

export const Registrar = () => {
    return (
        <div className="bg-light" style={{marginTop:0, padding:200}}>

        <div className="h3">
          CitasTec
          <br/>
          <form id="miFormulario"  >
            <div className="row" style={{marginTop:30}}>
              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="text" placeholder="Nombres" required  />
              </div>

              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="text" placeholder="Apellidos" required  />
              </div>

            </div>
            
            <div className="row" style={{marginTop:20}}>

            
              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="text" placeholder="DNI" required  />
              </div>

              <div className="col-6">
                <select className="form-select form-select-lg text-center" required  >
                  <option value="">Carrera</option>
                  <option value="DiseñoD">Diseño y desarrollo de software</option>
                  <option value="Maquinaria">Maquinaria Pesada</option>
                  <option value="Videojuegos">Desarrollo de videojuegos</option>
                </select>
              </div>
            </div>

            <div className="row" style={{marginTop:20}}>

            
              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="text" placeholder="Ciclo" required  />
              </div>

              <div className="col-6">
                <input className="form-control form-control-lg text-center" type="text" placeholder="Telefono" required  />
              </div>
              
            </div>

            <div className="row" style={{marginTop:50}}>
              <div className="col">
                <button className="btn btn-primary btn-lg">Registrar</button><br/><br/>
                <button className="btn btn-lg">Regresar</button>
              </div>
            </div>
          </form>
        </div>
                
      </div>


    )
}