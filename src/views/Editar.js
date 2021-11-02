import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Editar({ id }) {
  const [data, setData] = useState([]);
  const [body, setBody] = useState({});
  const [img, setImg] = useState();

  const getData = async () => {
    const { data } = await axios({
      url: `http://localhost:3001/v1/personajes/${id}`,
      method: "GET",
    });
    setData(data);
    setBody({
      nombre: data.nombre,
      apellido: data.apellido,
      descripcion: data.descripcion,
      nombreSuperHeroe: data.nombreSuperHeroe,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const ChangeBody = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const ChangeImg = (e) => {
    setBody({
      ...body,
      imagen: e.target.files[0],
    });
    setImg(e.target.files[0]);
  };

  const updateOne = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", body.nombre);
    formData.append("apellido", body.apellido);
    formData.append("nombreSuperHeroe", body.nombreSuperHeroe);
    formData.append("descripcion", body.descripcion);
    if (img) {
      formData.append("imagen", img);
    } else {
      formData.append("imagen", body.imagen);
    }
    await axios({
      url: `http://localhost:3001/v1/personajes/${id}`,
      method: "PUT",
      data: formData,
    });
    getData();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-5 col-lg-5 mt-4">
          <div className="card">
            <img
              src={data.imagen}
              className="img-fluid"
              alt={`imagen de ${data.nombre}`}
            />
            <div className="card-body">
              <h4 className=" h6 card-title font-weight-bold text-secondary">
                {data.nombreSuperHeroe}
              </h4>
              <p className="catd-text text-secondary">
                {data.nombre} {data.apellido}
              </p>
              <p className="card-subtitle text-secondary">{data.descripcion}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-7 col-lg-7 mt-4">
          <div className="card">
            <div className="card-body">
              <h1 className="h4 font-weight-bold card-title">
                Editar Personaje
              </h1>
              <form onSubmit={updateOne}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    required
                    defaultValue={data.nombre}
                    onChange={ChangeBody}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    name="apellido"
                    required
                    defaultValue={data.apellido}
                    onChange={ChangeBody}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="personaje">Personaje</label>
                  <input
                    type="text"
                    className="form-control"
                    id="personaje"
                    name="nombreSuperHeroe"
                    required
                    defaultValue={data.nombreSuperHeroe}
                    onChange={ChangeBody}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="imagen">
                    {data.imagen !== ""
                      ? `Imagen de ${data.nombre} ${data.apellido}`
                      : "No ha seleccionado una imagen"}
                  </label>
                  <input
                    id="imagen"
                    type="file"
                    className="form-control-file"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    required
                    onChange={ChangeImg}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion">Descripcion</label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    rows="3"
                    required
                    name="descripcion"
                    defaultValue={data.descripcion}
                    onChange={ChangeBody}
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-6 ">
                      <button
                        type="button"
                        className="btn btn-primary"
                        type="submit"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editar;
