import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light bg-white border-bottom sticky-top shadow-sm py-2 d-none d-md-block"
      style={{ minHeight: "70px" }}
    >
      <div className="container-fluid px-3 px-lg-4">
        <div className="d-flex align-items-center gap-2 gap-lg-3 flex-wrap">
          <img src="/logo.svg" alt="Logo" style={{ width: "34px" }} className="flex-shrink-0" />

          <div className="d-flex flex-wrap align-items-center gap-3 gap-lg-4 ps-3 border-start border-1 border-light">
            <div className="flex-shrink-0">
              <span className="text-muted d-block uppercase fw-bold ls-1" style={{ fontSize: "9px", lineHeight: 1.1 }}>NIFTY 50</span>
              <div className="d-flex align-items-center">
                <span className="fw-bold text-success me-1" style={{ fontSize: "13px" }}>22,419</span>
                <span className="text-success small fw-medium bg-success bg-opacity-10 px-1 rounded" style={{ fontSize: "10px" }}>+0.4%</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-muted d-block uppercase fw-bold ls-1" style={{ fontSize: "9px", lineHeight: 1.1 }}>SENSEX</span>
              <div className="d-flex align-items-center">
                <span className="fw-bold text-success me-1" style={{ fontSize: "13px" }}>73,806</span>
                <span className="text-success small fw-medium bg-success bg-opacity-10 px-1 rounded" style={{ fontSize: "10px" }}>+0.3%</span>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;