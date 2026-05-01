import React from "react";
import { holdings } from "../data";

const Holdings = () => {
  return (
    <div className="p-3 p-md-4">
      <h3 className="mb-4">Holdings ({holdings.length})</h3>

      <div className="table-responsive border rounded bg-white shadow-sm mb-4 mb-md-5">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th className="small text-uppercase fw-bold text-muted">Instrument</th>
              <th className="text-end small text-uppercase fw-bold text-muted">Qty.</th>
              <th className="text-end small text-uppercase fw-bold text-muted">Avg. cost</th>
              <th className="text-end small text-uppercase fw-bold text-muted">LTP</th>
              <th className="text-end small text-uppercase fw-bold text-muted">Cur. val</th>
              <th className="text-end small text-uppercase fw-bold text-muted">P&L</th>
              <th className="text-end small text-uppercase fw-bold text-muted">Net chg.</th>
              <th className="text-end small text-uppercase fw-bold text-muted">Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding, index) => {
              const curValue = holding.price * holding.qty;
              const isProfit = curValue - holding.avg * holding.qty >= 0.0;
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = holding.isLoss ? "text-danger" : "text-success";
              return (
                <tr key={index}>
                  <td className="fw-medium small">{holding.name}</td>
                  <td className="text-end small">{holding.qty}</td>
                  <td className="text-end small">{holding.avg.toFixed(2)}</td>
                  <td className="text-end small">{holding.price.toFixed(2)}</td>
                  <td className="text-end small">{curValue.toFixed(2)}</td>
                  <td className={`text-end small fw-medium ${profClass}`}>
                    {(curValue - holding.avg * holding.qty).toFixed(2)}
                  </td>
                  <td className="text-end small">{holding.net}</td>
                  <td className={`text-end small ${dayClass}`}>{holding.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row g-3 g-md-4">
        <div className="col-sm-6 col-md-4">
          <div className="card border-0 bg-white shadow-sm p-3 h-100">
            <h5 className="mb-1 fw-bold text-dark">
              29,875.<span className="small opacity-75">55</span>
            </h5>
            <p className="text-muted small mb-0 uppercase ls-1" style={{ fontSize: "10px" }}>Total investment</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card border-0 bg-white shadow-sm p-3 h-100">
            <h5 className="mb-1 fw-bold text-dark">
              31,428.<span className="small opacity-75">95</span>
            </h5>
            <p className="text-muted small mb-0 uppercase ls-1" style={{ fontSize: "10px" }}>Current value</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card border-0 bg-white shadow-sm p-3 h-100">
            <h5 className="mb-1 fw-bold text-success">1,553.40 (+5.20%)</h5>
            <p className="text-muted small mb-0 uppercase ls-1" style={{ fontSize: "10px" }}>P&L</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
