import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/order/allorders");
      setAllOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/order/deleteorder/${id}`);
      window.dispatchEvent(new Event("refresh-data"));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    window.addEventListener("refresh-data", fetchOrders);
    return () => window.removeEventListener("refresh-data", fetchOrders);
  }, []);

  if (allOrders.length === 0) {
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
  }

  return (
    <div className="p-3 p-md-4">
      <h3 className="mb-4">Orders ({allOrders.length})</h3>
      <div className="table-responsive border rounded bg-white shadow-sm">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th className="small text-uppercase fw-bold text-muted">Instrument</th>
              <th className="text-end small text-uppercase fw-bold text-muted">Qty.</th>
              <th className="text-end small text-uppercase fw-bold text-muted">Price</th>
              <th className="text-center small text-uppercase fw-bold text-muted">Mode</th>
              <th className="text-end small text-uppercase fw-bold text-muted">Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr key={order._id}>
                <td className="fw-medium small">{order.name}</td>
                <td className="text-end small">{order.qty}</td>
                <td className="text-end small">{order.price.toFixed(2)}</td>
                <td className="text-center small">
                  <span className={`badge rounded-pill ${order.mode === 'BUY' ? 'bg-success' : 'bg-danger'}`}>
                    {order.mode}
                  </span>
                </td>
                <td className="text-end">
                  <button 
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-sm btn-outline-danger border-0"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;