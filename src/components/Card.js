function Card({ data }) {
  return (
    <div className="container">
      <div className="row">
        {data.map((respuesta, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 p-3">
            <div className="card shadow h-100">
              <img src={respuesta.imagen} className="img-fluid" />
              <div className="card-body">
                <h4 className=" h6 card-title font-weight-bold text-secondary">
                  {respuesta.nombreSuperHeroe}
                </h4>
                <p className="text-secondary">
                  {respuesta.nombre} {respuesta.apellido}
                </p>
                <p className="card-subtitle text-secondary">
                  {respuesta.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
