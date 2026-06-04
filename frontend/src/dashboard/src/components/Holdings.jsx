import { useState, useEffect } from "react";
import api from "../../../utils/axios";

const Holdings = () => {
  const [holdingsData, setHoldingsData] = useState([]);

  const fetchHoldingsData = async () => {
    try {
      const holdingsRes = await api.get("/api/holding/allholdings");
      setHoldingsData(holdingsRes.data);
    } catch (error) {
      console.error("Error fetching holdings:", error);
    }
  };

  useEffect(() => {
    fetchHoldingsData();

    // Listen for refresh events
    window.addEventListener("refresh-data", fetchHoldingsData);
    return () => window.removeEventListener("refresh-data", fetchHoldingsData);
  }, []);

  // Calculate totals
  const totalInvestment = holdingsData.reduce((acc, h) => acc + (h.avg * h.qty), 0);
  const currentValue = holdingsData.reduce((acc, h) => acc + (h.price * h.qty), 0);
  const totalPnL = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  const formatCurrency = (val) => {
    const parts = val.toFixed(2).split(".");
    return (
      <>
        {parts[0]}.<span className="small opacity-75">{parts[1]}</span>
      </>
    );
  };
    
  return (
    <div className="p-3 p-md-4">
      <h3 className="mb-4">Holdings ({holdingsData.length})</h3>

      <div className="table-responsive border rounded bg-white shadow-sm mb-4 mb-md-5">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th className="small text-uppercase fw-bold text-muted">
                Instrument
              </th>
              <th className="text-end small text-uppercase fw-bold text-muted">
                Qty.
              </th>
              <th className="text-end small text-uppercase fw-bold text-muted">
                Avg. cost
              </th>
              <th className="text-end small text-uppercase fw-bold text-muted">
                LTP
              </th>
              <th className="text-end small text-uppercase fw-bold text-muted">
                Cur. val
              </th>
              <th className="text-end small text-uppercase fw-bold text-muted">
                P&L
              </th>
              <th className="text-end small text-uppercase fw-bold text-muted">
                Net chg.
              </th>
              <th className="text-end small text-uppercase fw-bold text-muted">
                Day chg.
              </th>
            </tr>
          </thead>
          <tbody>
            {holdingsData.map((holding, index) => {
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
                  <td className={`text-end small ${dayClass}`}>
                    {holding.day}
                  </td>
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
              {formatCurrency(totalInvestment)}
            </h5>
            <p
              className="text-muted small mb-0 uppercase ls-1"
              style={{ fontSize: "10px" }}
            >
              Total investment
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card border-0 bg-white shadow-sm p-3 h-100">
            <h5 className="mb-1 fw-bold text-dark">
              {formatCurrency(currentValue)}
            </h5>
            <p
              className="text-muted small mb-0 uppercase ls-1"
              style={{ fontSize: "10px" }}
            >
              Current value
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="card border-0 bg-white shadow-sm p-3 h-100">
            <h5 className={`mb-1 fw-bold ${totalPnL >= 0 ? "text-success" : "text-danger"}`}>
              {totalPnL.toFixed(2)} ({pnlPercentage >= 0 ? "+" : ""}{pnlPercentage.toFixed(2)}%)
            </h5>
            <p
              className="text-muted small mb-0 uppercase ls-1"
              style={{ fontSize: "10px" }}
            >
              P&L
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;