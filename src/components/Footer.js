import React from "react";

function Footer() {
  return (
    <footer className="bg-white shadow footer_principal">
      <div className="container">
        <p className="mb-0 text-secondary">
          Copyright © 2020-2021
          <span className="text-info font-weight-bold"> Juan Morales</span>
        </p>
        <div className="terminos">
          <span>Politicas de privacidad</span>
          <span> Terminos y condiciones</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
