import React from "react";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import "./NavBar.css";

const NavBar = ({orderCount}) => {
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
        <li className="nav-item" >
          <Link className="nav-link" to="/newOrder">Add Item</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="/order">Order List</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <span>{orderCount}</span>
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </nav>

  );
};

export default NavBar;
