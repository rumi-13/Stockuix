import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm py-1 py-lg-2" style={{ minHeight: "70px" }}>
      <div className="container-fluid px-2 px-lg-4">
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <img src="/logo.svg" style={{ width: "35px" }} className="me-3 me-lg-4" />
          
          {/* Indices - Scrollable on mobile */}
          <div className="d-flex overflow-auto hide-scrollbar border-start ps-3 gap-3 gap-lg-4 pe-2">
            <div className="flex-shrink-0">
              <span className="text-muted d-block uppercase fw-bold ls-1" style={{ fontSize: "9px" }}>NIFTY 50</span>
              <div className="d-flex align-items-center">
                <span className="fw-bold text-success me-1" style={{ fontSize: "13px" }}>22,419</span>
                <span className="text-success small fw-medium bg-success bg-opacity-10 px-1 rounded" style={{ fontSize: "10px" }}>+0.4%</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-muted d-block uppercase fw-bold ls-1" style={{ fontSize: "9px" }}>SENSEX</span>
              <div className="d-flex align-items-center">
                <span className="fw-bold text-success me-1" style={{ fontSize: "13px" }}>73,806</span>
                <span className="text-success small fw-medium bg-success bg-opacity-10 px-1 rounded" style={{ fontSize: "10px" }}>+0.3%</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          className="navbar-toggler border-0 shadow-none ms-2" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ width: "1.2em", height: "1.2em" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
