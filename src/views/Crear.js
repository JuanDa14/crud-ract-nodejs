import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Crear() {
  const history = useHistory();
  const url = "http://localhost:3001/v1";

  const [body, setBody] = useState({
    nombre: "",
    nombreSuperHeroe: "",
    apellido: "",
    videojuego: "",
    descripcion: "",
    imagen: "",
  });

  const ChangeData = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
    console.log(body);
  };

  const ChangeImg = (e) => {
    setBody({
      ...body,
      imagen: e.target.files[0],
    });
  };

  const insertData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", body.nombre);
    formData.append("apellido", body.apellido);
    formData.append("nombreSuperHeroe", body.nombreSuperHeroe);
    formData.append("imagen", body.imagen);
    formData.append("descripcion", body.descripcion);
    console.log(formData);
    await axios({
      url: `${url}/personajes`,
      method: "POST",
      data: formData,
    });
    history.push("/");
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-12 col-md-7 mb-3">
          <div className="card">
            <div className="card-body">
              <h1 className="h4 card-title">Nuevo Personaje</h1>
              <p className="card-text">
                Agregue el personaje que desea uwu !!!
              </p>
              <form onSubmit={insertData}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    required
                    name="nombre"
                    onChange={ChangeData}
                    placeholder="Escriba el nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    required
                    name="apellido"
                    onChange={ChangeData}
                    placeholder="Escriba el apellido"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="personaje">Personaje</label>
                  <input
                    type="text"
                    className="form-control"
                    id="personaje"
                    required
                    name="nombreSuperHeroe"
                    onChange={ChangeData}
                    placeholder="Escriba el personaje"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="imagen">Imagen</label>
                  <input
                    id="imagen"
                    type="file"
                    className="form-control-file"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    onChange={ChangeImg}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion">Descripcion</label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    rows="5"
                    required
                    name="descripcion"
                    onChange={ChangeData}
                    placeholder="Escriba la descripcion"
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-6 ">
                      <button type="submit" className="btn btn-primary">
                        Añadir
                      </button>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
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
              <h4 className=" h4 card-title">Contacto</h4>
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
