import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-2 py-lg-3">
      <div className="container">
        <Link className="navbar-brand text-decoration-none" to="/">
          <img src="logo.svg" alt="StockUIX" style={{ height: "32px" }} />
        </Link>
        
        {/* Mobile Hamburger Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Menu Container */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto gap-lg-4 mt-3 mt-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link to="/signup" className="nav-link text-dark fw-medium py-2 py-lg-0">Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark fw-medium py-2 py-lg-0">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link text-dark fw-medium py-2 py-lg-0">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link text-dark fw-medium py-2 py-lg-0">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link text-dark fw-medium py-2 py-lg-0">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
