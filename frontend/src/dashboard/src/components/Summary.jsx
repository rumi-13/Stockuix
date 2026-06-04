import React, { useEffect, useState } from "react";
import api from "../../../utils/axios";

const Summary = () => {
  const [fullName, setFullName] = useState("User");
  const [holdingsData, setHoldingsData] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [userResponse, holdingsResponse] = await Promise.all([
          api.get("/api/auth/me"),
          api.get("/api/holding/allholdings"),
        ]);

        if (userResponse.data?.fullName) {
          setFullName(userResponse.data.fullName);
        }

        setHoldingsData(Array.isArray(holdingsResponse.data) ? holdingsResponse.data : []);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const holdingsCount = holdingsData.length;
  const totalInvestment = holdingsData.reduce((acc, holding) => acc + (holding.avg * holding.qty), 0);
  const currentValue = holdingsData.reduce((acc, holding) => acc + (holding.price * holding.qty), 0);
  const totalPnL = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  const formatCurrency = (value) => {
    const absoluteValue = Math.abs(value);
    if (absoluteValue >= 100000) {
      return `${(value / 100000).toFixed(2)}L`;
    }

    if (absoluteValue >= 1000) {
      return `${(value / 1000).toFixed(2)}k`;
    }

    return value.toFixed(2);
  };

  return (
    <div className="p-3 p-md-4">
      <div className="mb-4 mb-md-5">
        <h6 className="text-muted mb-1">Welcome back,</h6>
        <h2 className="fw-bold">Hi, {fullName}!</h2>
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
                  <h3 className="fw-bold mb-1" style={{ fontSize: "1.5rem" }}>{formatCurrency(currentValue)}</h3>
                  <p className="text-muted small mb-0 uppercase tracking-wider" style={{ fontSize: "10px" }}>Market value</p>
              </div>
              <div className="col-6 ps-3 ps-md-4">
                <div className="mb-2">
                    <span className="text-muted small me-2 uppercase d-block d-xl-inline" style={{ fontSize: "9px" }}>Cost basis</span>
                    <span className="fw-medium small">{formatCurrency(totalInvestment)}</span>
                </div>
                <div>
                    <span className="text-muted small me-2 uppercase d-block d-xl-inline" style={{ fontSize: "9px" }}>P&amp;L</span>
                    <span className={`fw-medium small ${totalPnL >= 0 ? "text-success" : "text-danger"}`}>
                      {totalPnL >= 0 ? "+" : ""}{formatCurrency(totalPnL)} ({pnlPercentage >= 0 ? "+" : ""}{pnlPercentage.toFixed(2)}%)
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-3 p-md-4 h-100 bg-white">
            <div className="d-flex align-items-center mb-3 mb-md-4">
              <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                <div className="text-success fw-bold px-1 small text-uppercase ls-1">Holdings ({holdingsCount})</div>
              </div>
            </div>

            <div className="row align-items-center g-0">
              <div className="col-6 border-end pe-3">
                <h3 className="fw-bold mb-1 text-success" style={{ fontSize: "1.5rem" }}>
                  {formatCurrency(totalPnL)} <small className="fw-normal" style={{ fontSize: "12px" }}>{totalPnL >= 0 ? "+" : ""}{pnlPercentage.toFixed(2)}%</small>
                </h3>
                <p className="text-muted small mb-0 uppercase tracking-wider" style={{ fontSize: "10px" }}>P&L</p>
              </div>
              <div className="col-6 ps-3 ps-md-4">
                <div className="mb-2">
                  <span className="text-muted small me-2 uppercase d-block d-xl-inline" style={{ fontSize: "9px" }}>Current Value</span>
                  <span className="fw-medium small">{formatCurrency(currentValue)}</span>
                </div>
                <div>
                  <span className="text-muted small me-2 uppercase d-block d-xl-inline" style={{ fontSize: "9px" }}>Investment</span>
                  <span className="fw-medium small">{formatCurrency(totalInvestment)}</span>
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
