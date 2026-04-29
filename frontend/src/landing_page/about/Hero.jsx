import React from 'react';

function Hero() {
    return ( 
        <div className="container py-5 my-lg-5">
            <div className="row align-items-center justify-content-center">
                {/* Left Column - Circular Icon */}
                <div className="col-9 col-sm-6 col-md-4 text-center mb-5 mb-md-0">
                    <div 
                        className="mx-auto shadow-lg d-flex align-items-center justify-content-center"
                        style={{
                            width: 'clamp(150px, 40vw, 250px)',
                            height: 'clamp(150px, 40vw, 250px)',
                            borderRadius: '50%',
                            backgroundColor: '#0d6efd',
                        }}
                    >
                        <i className="fas fa-rocket text-white" style={{ fontSize: 'clamp(50px, 15vw, 100px)' }}></i>
                    </div>
                </div>

                {/* Right Column - Text Content */}
                <div className="col-11 col-md-8 col-lg-7">
                    <h1 className="display-4 fw-bold mb-4 text-center text-md-start">Our Mission</h1>
                    <p className="lead mb-4 text-muted text-center text-md-start" style={{ lineHeight: '1.8' }}>
                        At <strong className="text-dark">StockUIX</strong>, we believe that investing should be accessible to everyone. Our mission is to democratize financial markets and empower individuals to build wealth through smart, informed trading.
                    </p>
                    <p className="mb-5 text-center text-md-start" style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                        We've pioneered the concept of discount broking and price transparency in India. With zero hidden charges, cutting-edge technology, and world-class customer service, we're making it easier than ever for people to take control of their financial future.
                    </p>
                    
                    <div className="row g-4 text-center text-md-start">
                        <div className="col-4">
                            <h6 className="text-primary fw-bold mb-1">
                                <i className="fas fa-check-circle d-block d-md-inline mb-2 mb-md-0 me-md-2"></i>Transparent
                            </h6>
                            <p className="small text-muted d-none d-md-block">No hidden fees or surprises</p>
                        </div>
                        <div className="col-4">
                            <h6 className="text-primary fw-bold mb-1">
                                <i className="fas fa-check-circle d-block d-md-inline mb-2 mb-md-0 me-md-2"></i>Innovative
                            </h6>
                            <p className="small text-muted d-none d-md-block">Advanced tools for traders</p>
                        </div>
                        <div className="col-4">
                            <h6 className="text-primary fw-bold mb-1">
                                <i className="fas fa-check-circle d-block d-md-inline mb-2 mb-md-0 me-md-2"></i>Accessible
                            </h6>
                            <p className="small text-muted d-none d-md-block">Trading for everyone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;
