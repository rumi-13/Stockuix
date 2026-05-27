import React from "react";

const Apps = () => {
  const apps = [
    { name: "Kite", desc: "Flagship trading platform", icon: "fa-solid fa-wind", color: "text-primary" },
    { name: "Console", desc: "Reporting & analytics", icon: "fa-solid fa-chart-line", color: "text-success" },
    { name: "Coin", desc: "Mutual fund investments", icon: "fa-solid fa-coins", color: "text-warning" },
    { name: "Kite Connect", desc: "Trading APIs", icon: "fa-solid fa-plug", color: "text-danger" },
    { name: "Varsity", desc: "Trading education", icon: "fa-solid fa-graduation-cap", color: "text-info" },
    { name: "Sentinel", desc: "Market alerts", icon: "fa-solid fa-bell", color: "text-secondary" },
  ];

  return (
    <div className="p-4">
      <h3 className="mb-4">Apps</h3>
      <div className="row g-4">
        {apps.map((app, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100 bg-white p-3 cursor-pointer" style={{ transition: "transform 0.2s, box-shadow 0.2s" }}>
              <div className="card-body">
                <div className={`mb-3 ${app.color}`}>
                  <i className={`${app.icon} fs-2`}></i>
                </div>
                <h5 className="fw-bold mb-2">{app.name}</h5>
                <p className="text-muted small mb-0">{app.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
