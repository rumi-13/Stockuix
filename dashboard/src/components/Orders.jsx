import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="p-4 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <div className="text-center p-5 bg-white rounded shadow-sm border" style={{ maxWidth: "450px" }}>
        <div className="mb-4">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
             <i className="fa-solid fa-basket-shopping fs-1 text-muted opacity-50"></i>
          </div>
        </div>
        <h4 className="fw-bold mb-3">No orders yet</h4>
        <p className="text-muted mb-4">
          You haven't placed any orders today. Start trading to see your orders here.
        </p>
        <Link to={"/"} className="btn btn-primary px-4 py-2 fw-bold rounded-pill shadow-sm">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
