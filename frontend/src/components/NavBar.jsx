import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <div className="navbar">
    //     <nav>
    //     <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/admin">Admin Page</Link></li>
    //         <li><Link to="/customer">Customer</Link></li>
    //         <li><Link to="/register">Register</Link></li>
    //     </ul>
    // </nav>
    // </div>

    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="navbar-brand" href="#">
              AFOOD
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/menu">
              Menu
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Login{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
