import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <Link className="navbar-brand" to="/">Home</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      // aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item" >
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="#">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Cart</Link>
        </li>
      </ul>
    </div>
  </nav>

  );
};

export default NavBar;
