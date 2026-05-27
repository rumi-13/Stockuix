import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="p-3 p-md-4">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <h3 className="mb-0">Funds</h3>
        <div className="d-flex gap-2 w-100 w-sm-auto">
          <button type="button" className="btn btn-success px-4 fw-bold flex-grow-1 flex-sm-grow-0">Add funds</button>
          <button type="button" className="btn btn-primary px-4 fw-bold flex-grow-1 flex-sm-grow-0">Withdraw</button>
        </div>
      </div>

      <div className="alert alert-info border-0 shadow-sm mb-4 py-2 small">
        <i className="fa-solid fa-circle-info me-2"></i>
        Instant, zero-cost fund transfers with UPI.
      </div>

      <div className="row g-3 g-md-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm bg-white h-100">
            <div className="card-header bg-white border-bottom py-3">
              <h5 className="mb-0 fw-bold text-primary small text-uppercase ls-1">Equity</h5>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex justify-content-between align-items-center py-2 py-md-3">
                  <span className="text-muted small">Available margin</span>
                  <span className="fw-bold text-success">4,043.10</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center py-2 py-md-3">
                  <span className="text-muted small">Used margin</span>
                  <span className="fw-bold">3,757.30</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center py-2 py-md-3">
                  <span className="text-muted small">Available cash</span>
                  <span className="fw-bold">4,043.10</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center py-2 py-md-3 bg-light">
                  <span className="text-muted small">Opening Balance</span>
                  <span className="fw-medium">4,043.10</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center py-2 py-md-3">
                  <span className="text-muted small">Payin</span>
                  <span className="fw-medium">4,064.00</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center py-2 py-md-3">
                  <span className="text-muted small">SPAN</span>
                  <span className="fw-medium">0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm bg-white h-100">
            <div className="card-header bg-white border-bottom py-3">
              <h5 className="mb-0 fw-bold text-success small text-uppercase ls-1">Commodity</h5>
            </div>
            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-4 p-md-5">
              <div className="bg-light rounded-circle p-3 p-md-4 mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-box-open fs-3 text-muted"></i>
              </div>
              <p className="text-muted mb-4 small">You don't have a commodity account</p>
              <button type="button" className="btn btn-outline-primary px-4 fw-bold rounded-pill small">Open Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
