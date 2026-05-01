import React from "react";

const Summary = () => {
  return (
    <div className="p-3 p-md-4">
      <div className="mb-4 mb-md-5">
        <h6 className="text-muted mb-1">Welcome back,</h6>
        <h2 className="fw-bold">Hi, User!</h2>
        <hr className="my-3 my-md-4 opacity-10" />
      </div>

      <div className="row g-3 g-md-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-3 p-md-4 h-100 bg-white">
            <div className="d-flex align-items-center mb-3 mb-md-4">
              <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                <div className="text-primary fw-bold px-1 small text-uppercase ls-1">Equity</div>
              </div>
            </div>
            
            <div className="row align-items-center g-0">
              <div className="col-6 border-end pe-3">
                <h3 className="fw-bold mb-1" style={{ fontSize: "1.5rem" }}>3.74k</h3>
                <p className="text-muted small mb-0 uppercase tracking-wider" style={{ fontSize: "10px" }}>Margin available</p>
              </div>
              <div className="col-6 ps-3 ps-md-4">
                <div className="mb-2">
                  <span className="text-muted small me-2 uppercase d-block d-xl-inline" style={{ fontSize: "9px" }}>Margins used</span>
                  <span className="fw-medium small">0</span>
                </div>
                <div>
                  <span className="text-muted small me-2 uppercase d-block d-xl-inline" style={{ fontSize: "9px" }}>Opening balance</span>
                  <span className="fw-medium small">3.74k</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-3 p-md-4 h-100 bg-white">
            <div className="d-flex align-items-center mb-3 mb-md-4">
              <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                <div className="text-success fw-bold px-1 small text-uppercase ls-1">Holdings (13)</div>
              </div>
            </div>

            <div className="row align-items-center g-0">
              <div className="col-6 border-end pe-3">
                <h3 className="fw-bold mb-1 text-success" style={{ fontSize: "1.5rem" }}>
                  1.55k <small className="fw-normal" style={{ fontSize: "12px" }}>+5.2%</small>
                </h3>
                <p className="text-muted small mb-0 uppercase tracking-wider" style={{ fontSize: "10px" }}>P&L</p>
              </div>
              <div className="col-6 ps-3 ps-md-4">
                <div className="mb-2">
                  <span className="text-muted small me-2 uppercase d-block d-xl-inline" style={{ fontSize: "9px" }}>Current Value</span>
                  <span className="fw-medium small">31.43k</span>
                </div>
                <div>
                  <span className="text-muted small me-2 uppercase d-block d-xl-inline" style={{ fontSize: "9px" }}>Investment</span>
                  <span className="fw-medium small">29.88k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
