import React from 'react';

function Hero() {
    return (
        <section className="container-fluid py-5" style={{ backgroundColor: '#f0f7ff', borderBottom: '1px solid #e1e8f0' }}>
            <div className="container py-5 text-center">
                <h1 className="display-4 fw-bold mb-3" style={{ color: '#1e293b' }}>How can we help?</h1>
                <p className="lead mb-5 text-muted">Search our knowledge base or get in touch with our team</p>
                
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="position-relative">
                            <input 
                                type="text" 
                                className="form-control form-control-lg border-1 ps-4 py-4 shadow-sm" 
                                placeholder="Search for answers (e.g., 'How to reset password', 'Trading hours')"
                                style={{ borderRadius: '12px', borderColor: '#cbd5e1' }}
                            />
                            <i className="fa fa-search position-absolute text-muted fs-4" style={{ right: '25px', top: '22px' }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
