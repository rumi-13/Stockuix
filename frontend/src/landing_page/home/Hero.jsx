import React from "react";
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container py-4 ">
      <div className="row justify-content-center text-center">
        <div className="col-11 col-md-10">
          <img src="homeHero.png" alt="Hero Img" className="img-fluid mb-4 mb-md-5 px-lg-5" />
          <h1 className="display-5 fw-bold mb-3">Invest in everything</h1>
          <p className="lead text-muted mb-4 mb-md-5 mx-auto" style={{ maxWidth: '600px' }}>
            Start your investment journey today with our easy-to-use
            platform. Join millions of traders across the globe.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
