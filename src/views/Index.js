import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Index() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios({
      url: `http://localhost:3001/v1/personajes`,
      method: "GET",
    });
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteOne = async (id) => {
    await axios({
      url: `http://localhost:3001/v1/personajes/${id}`,
      method: "DELETE",
    });
    getData();
  };

  return (
    <div className="container">
      <div className="col-12 mt-4">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Personaje</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((respuesta, index) => (
              <tr key={index}>
                <td className="imagen">{respuesta.nombre}</td>
                <td>{respuesta.apellido}</td>
                <td>{respuesta.nombreSuperHeroe}</td>
                <td>
                  <img
                    src={respuesta.imagen}
                    className="img-fluid"
                    width="200"
                  />
                </td>
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
