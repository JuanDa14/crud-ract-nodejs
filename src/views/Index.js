import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Style.css";

function Index() {
  const [data, setData] = useState([]);

  const url = "http://localhost:3001/personajes";

  const getData = () => {
    const options = {
      method: "GET",
    };
    fetch(url, options)
      .then((respuesta) => respuesta.json())
      .then((datos) => setData(datos))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteOne = (id) => {
    const options = {
      method: "DELETE",
    };
    fetch(`${url}/${id}`, options)
      .then((respuesta) => respuesta)
      .catch((error) => console.log(error));
      getData();
  };

  return (
    <div className="container text-center">
      <div className="col-12 mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Personaje</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((respuesta, index) => (
              <tr key={index}>
                <td>{respuesta.nombre}</td>
                <td>{respuesta.apellidos}</td>
                <td>{respuesta.nombre_superheroe}</td>
                <td>
                  <div className="row">
                    <div className="col-6">
                      <Link to={`/editar/${respuesta._id}`}>
                        <button className="btn btn-success">
                          <i className="uil uil-edit"></i>
                        </button>
                      </Link>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteOne(respuesta._id);
                        }}
                      >
                        <i className="uil uil-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
