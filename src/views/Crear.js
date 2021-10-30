import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../css/Style.css";
function Crear() {
  const history = useHistory();

  const url = "http://localhost:3001/personajes";

  const [datos, setdatos] = useState({
    nombre: "",
    apellidos: "",
    descripcion: "",
    nombre_superheroe: "",
  });

  const handleNombre = (event) => {
    datos.nombre = event.target.value;
    setdatos(datos);
  };

  const handleApellidos = (event) => {
    datos.apellidos = event.target.value;
    setdatos(datos);
  };

  const handlePersonaje = (event) => {
    datos.nombre_superheroe = event.target.value;
    setdatos(datos);
  };

  const handleDescripcion = (event) => {
    datos.descripcion = event.target.value;
    setdatos(datos);
  };

  const insertData = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    };
    fetch(url, options)
      .then((respuesta) => respuesta.json())
      .catch((error) => console.log(error));
    history.push("/");
  };

  return (
    <div className="container pt-4 mb-5">
      <div className="row">
        <div className="col-12 col-md-7 mb-3 mb-md-0">
          <div className="card">
            <div className="card-body">
              <h1 className="h4 font-weight-bold card-title">
                Nuevo Personaje
              </h1>
              <p className="card-text">Agregue el personaje que desea</p>
              <form onSubmit={insertData}>
                <div className="form-group">
                  <label htmlFor="idnombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="idnombre"
                    required={true}
                    onChange={handleNombre}
                    placeholder="Escriba el nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="idapellidos">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="idapellidos"
                    required={true}
                    onChange={handleApellidos}
                    placeholder="Escriba el apellido"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="idpersonaje">Personaje</label>
                  <input
                    type="text"
                    className="form-control"
                    id="idpersonaje"
                    required={true}
                    onChange={handlePersonaje}
                    placeholder="Escriba el personaje"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="iddescripcion">Descripcion</label>
                  <textarea
                    className="form-control"
                    id="iddescripcion"
                    rows="5"
                    required={true}
                    onChange={handleDescripcion}
                    placeholder="Escriba la descripcion"
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="row text-center">
                    <div className="col-6 ">
                      <button type="submit" className="btn btn-primary">
                        Añadir
                      </button>
                    </div>
                    <div className="col-6 ">
                      <Link to="/">
                        <button className="btn btn-danger">Volver</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 mb-3 mb-md-0">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Contacto</h4>
              <p className="card-text">
                Si deseas puedes ver mas en
                <a href="https://github.com/JuanDa14?tab=repositories">
                  <span> Gitbub</span>
                </a>
                , tambien puedes contactarme mediante el correo
                <span> jmoralesp@unitru.edu.pe</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crear;
