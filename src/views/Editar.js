import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Style.css";

function Editar({ id }) {
  const [data, setData] = useState([]);

  const url = `http://localhost:3001/personajes/${id}`;

  const [datos, setDatos] = useState({
    nombre: data.nombre,
    apellidos: data.apellidos,
    descripcion: data.descripcion,
    nombre_superheroe: data.nombre_superheroe,
  });

  const getData = () => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleNombre = (e) => {
    datos.nombre = e.target.value;
    setDatos(datos);
  };

  const handleApellidos = (e) => {
    datos.apellidos = e.target.value;
    setDatos(datos);
  };

  const handleDescripcion = (e) => {
    datos.descripcion = e.target.value;
    setDatos(datos);
  };

  const handlePersonaje = (e) => {
    datos.nombre_superheroe = e.target.value;
    setDatos(datos);
  };

  const updateOne = (e) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    };
    fetch(url, options)
      .then((respuesta) => respuesta.json())
      .catch((error) => error);
    getData();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mt-4">
          <div className="card">
            <div className="card-header">
              {data.nombre} {data.apellidos}
            </div>
            <div className="card-body">
              <h4 className="card-title">{data.nombre_superheroe}</h4>
              <p className="card-text">{data.descripcion}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4">
          <div className="card">
            <div className="card-body">
              <h1 className="h4 font-weight-bold card-title">
                Editar Personaje
              </h1>
              <div className="form-group">
                <label htmlFor="idnombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="idnombre"
                  required
                  defaultValue={data.nombre}
                  onChange={handleNombre}
                />
              </div>
              <div className="form-group">
                <label htmlFor="idapellidos">Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="idapellidos"
                  required={true}
                  defaultValue={data.apellidos}
                  onChange={handleApellidos}
                />
              </div>
              <div className="form-group">
                <label htmlFor="idpersonaje">Personaje</label>
                <input
                  type="text"
                  className="form-control"
                  id="idpersonaje"
                  required={true}
                  defaultValue={data.nombre_superheroe}
                  onChange={handlePersonaje}
                />
              </div>
              <div className="form-group">
                <label htmlFor="iddescripcion">Descripcion</label>
                <textarea
                  className="form-control"
                  id="iddescripcion"
                  rows="3"
                  required={true}
                  defaultValue={data.descripcion}
                  onChange={handleDescripcion}
                ></textarea>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-6 ">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        updateOne();
                      }}
                    >
                      Editar
                    </button>
                  </div>
                  <div className="col-6 text-right">
                    <Link to="/">
                      <button className="btn btn-danger">Volver</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editar;
