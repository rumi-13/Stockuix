import React, { useState } from "react";
import axios from "axios";
const BuyActionWindow = ({ uid = "", mode = "BUY", onClose }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8000/api/order/neworder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode,
      }, {
        withCredentials: true,
      });

      // Dispatch refresh event for other components
      window.dispatchEvent(new Event("refresh-data"));

      if (typeof onClose === "function") {
        onClose();
      }
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  return (
    <div 
      className="position-fixed top-0 inset-s-0 w-100 h-100 d-flex align-items-center justify-content-center" 
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999 }}
      onClick={onClose}
    >
      <div 
        className="card shadow-lg border-0 rounded-4" 
        style={{ width: "100%", maxWidth: "420px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card-header bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
          <div>
            <span className={`badge ${mode === 'BUY' ? 'bg-success' : 'bg-danger'} mb-2`}>
              {mode} ORDER
            </span>
            <h2 className="fw-bold mb-0">{uid || "Select stock"}</h2>
          </div>
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>

        <div className="card-body p-4">
          <p className="text-muted small mb-4">
            Enter quantity and price to place your order.
          </p>

          <div className="mb-3">
            <label htmlFor="qty" className="form-label small fw-bold text-uppercase text-muted">Qty.</label>
            <input
              type="number"
              className="form-control form-control-lg rounded-3"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="form-label small fw-bold text-uppercase text-muted">Price</label>
            <input
              type="number"
              className="form-control form-control-lg rounded-3"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </div>

          <div className="bg-light rounded-3 p-3 mb-4 d-flex justify-content-between align-items-center">
            <span className="text-muted small">Margin required</span>
            <span className="fw-bold">₹{(stockQuantity * stockPrice).toFixed(2)}</span>
          </div>

          <div className="d-flex gap-2">
            <button 
              type="button" 
              className="btn btn-light btn-lg grow rounded-3 fw-bold" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="button" 
              className={`btn ${mode === 'BUY' ? 'btn-success' : 'btn-danger'} btn-lg grow rounded-3 fw-bold`} 
              onClick={handleSubmit}
            >
              {mode === "BUY" ? "Buy" : "Sell"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;