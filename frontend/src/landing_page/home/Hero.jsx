import React from "react";

function Hero() {
  return (
    <div className="container py-5 mt-md-5">
      <div className="row justify-content-center text-center">
        <div className="col-11 col-md-10">
          <img src="homeHero.png" alt="Hero Img" className="img-fluid mb-4 mb-md-5 px-lg-5" />
          <h1 className="display-5 fw-bold mb-3">Invest in everything</h1>
          <p className="lead text-muted mb-4 mb-md-5 mx-auto" style={{ maxWidth: '600px' }}>
            Start your investment journey today with our easy-to-use
            platform. Join millions of traders across the globe.
          </p>
          <button className="btn btn-primary btn-lg px-5 py-2 py-md-3 rounded-pill fw-bold shadow-sm">
            Signup now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
