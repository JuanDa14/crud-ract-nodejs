import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../css/Style.css";

function Lista() {
  const [data, setdata] = useState([]);

  const url = "http://localhost:3001/personajes";

  const fetchApi = (url) => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => setdata(datos))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchApi(url);
  }, []);

  return (
    <div>
      <Card data={data}></Card>
    </div>
  );
}

export default Lista;
