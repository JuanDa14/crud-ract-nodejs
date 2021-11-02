import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Spider-Man-Logo.png"
            width="150"
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
                <span className="nav-link">
                  <i className="uil uil-home"></i> Inicio
                </span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/crear" className="nav-link">
                <span className="nav-link">
                  <i className="uil uil-plus-circle"></i> Crear
                </span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/lista" className="nav-link">
                <span className="nav-link">
                  <i className="uil uil-list-ul"></i> Pesonajes
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
