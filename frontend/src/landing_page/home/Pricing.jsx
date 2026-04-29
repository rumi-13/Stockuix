import React from 'react';

function Pricing() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-4">
                    <h2 className="mb-4">Unbeatable pricing</h2>
                    <p className="mb-4">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="btn btn-link p-0">See pricing →</a>
                </div>
                <div className="col-7">
                    <div className="row text-center">
                        <div className="col-4 mb-4">
                            <h1 className="text-warning">₹0</h1>
                            <p className="small text-muted">Free account opening</p>
                        </div>
                        <div className="col-4 mb-4">
                            <h1 className="text-warning">₹0</h1>
                            <p className="small text-muted">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-4 mb-4">
                            <h1 className="text-warning">₹20</h1>
                            <p className="small text-muted">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
