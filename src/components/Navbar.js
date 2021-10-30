import React from "react";
import { Link } from "react-router-dom";
import "../css/Style.css";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/11/Spider-Man-Logo.png"
              width="60"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  <i className="uil uil-home"></i> {""}
                  Inicio
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/crear" className="nav-link">
                  <i className="uil uil-plus-circle"></i> {""}
                  Crear
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/lista" className="nav-link">
                  <i className="uil uil-list-ul"></i> {""}
                  Personajes
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
