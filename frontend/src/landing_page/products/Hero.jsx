import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="bg-light py-5 text-center border-bottom border-light">
            <div className="container py-lg-5">
                <div className="row justify-content-center">
                    <div className="col-11 col-md-10 col-lg-8">
                        <h1 className="display-4 fw-bold mb-3">StockUIX Products</h1>
                        <p className="lead mb-4 text-muted px-md-5">
                            Sleek, modern, and intuitive trading platforms designed for the next generation of investors.
                        </p>
                        <Link to="#products" className="text-primary fw-medium text-decoration-none">
                            Explore our product suite <i className="fas fa-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
