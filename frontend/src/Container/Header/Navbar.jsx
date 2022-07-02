import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-primary" to="#">
          School App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb--0">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/teacher">
              Teacher
            </NavLink>
            <NavLink className="nav-link" to="/student">
              Student
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
