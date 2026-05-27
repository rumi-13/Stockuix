import React from 'react';
import { useNavigate } from 'react-router-dom';
function OpenAccount() {
    const navigate = useNavigate();
    return ( 
        <div className="container py-5 my-lg-5">
            <div className="row text-center justify-content-center">
                <div className="col-11 col-md-10 col-lg-8">
                    <h2 className="display-5 fw-bold mb-4">Open a StockUIX account</h2>
                    <p className="lead mb-5 text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                    <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm" onClick={()=> navigate('/signup')}>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;
