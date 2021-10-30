import "../css/Style.css";

function Card({ data }) {
  return (
    <div className="container">
      <div className="row text-center">
        {data.map((respuesta, index) => (
          <div key={index} className="col-12 col-md-4 mt-4">
            <div className="card">
              <div className="card-header">{respuesta.nombre_superheroe}</div>
              <div className="card-body">
                <h4 className="card-title">
                  {respuesta.nombre} {respuesta.apellidos}
                </h4>
                <p className="card-text">{respuesta.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
