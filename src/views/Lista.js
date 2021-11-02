import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

function Lista() {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const { data } = await axios({
      url: "http://localhost:3001/v1/personajes",
      method: "GET",
    });
    setdata(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Card data={data}></Card>;
}

export default Lista;
