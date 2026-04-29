import React from 'react';

function Hero() {
    return (
        <div className="container py-5 my-lg-5">
            <div className="row text-center justify-content-center">
                <div className="col-11 col-md-10">
                    <h1 className="display-4 fw-bold mb-3">Pricing</h1>
                    <p className="text-muted fs-4 mb-5 mx-auto" style={{ maxWidth: '800px' }}>
                        Free equity delivery and direct mutual funds. Flat ₹20 intraday and F&O.
                    </p>
                </div>
            </div>
            
            <div className="row text-center g-4 mt-2">
                <div className="col-md-4">
                    <div className="p-3">
                        <img src="pricing0.svg" alt="Free Equity" className="img-fluid mb-4" style={{ maxWidth: '200px' }} />
                        <h2 className="fs-3 fw-bold mb-3">Free equity delivery</h2>
                        <p className="text-muted">
                            All equity delivery trades (NSE, BSE), are ₹0 brokerage.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3">
                        <img src="pricing0.svg" alt="Free Mutual Funds" className="img-fluid mb-4" style={{ maxWidth: '200px' }} />
                        <h2 className="fs-3 fw-bold mb-3">Free direct MF</h2>
                        <p className="text-muted">
                            All direct mutual fund investments are ₹0 commission.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3">
                        <img src="pricingEquity.svg" alt="Intraday and F&O" className="img-fluid mb-4" style={{ maxWidth: '200px' }} />
                        <h2 className="fs-3 fw-bold mb-3">Intraday and F&O</h2>
                        <p className="text-muted">
                            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
