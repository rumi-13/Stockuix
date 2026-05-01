import React from 'react';

function Footer() {
    return ( 
        <footer className="bg-white text-dark py-5 border-top">
            <div className="container">
                <div className="row g-4">
                    {/* Left Section - Logo & Social */}
                    <div className="col-12 col-md-4 text-center text-md-start">
                        <div className="mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
                            <img src="logo.svg" alt="StockUIX" style={{ height: "32px" }} className="me-2" />
                            
                        </div>
                        
                        <p className="small mb-3 text-muted">
                            © 2024 - 2026, StockUIX Inc.<br />
                            All rights reserved.
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start mb-4 mb-md-0">
                            <a href="#" className="text-muted hover-primary transition"><i className="fab fa-twitter fs-5"></i></a>
                            <a href="#" className="text-muted hover-primary transition"><i className="fab fa-facebook fs-5"></i></a>
                            <a href="#" className="text-muted hover-primary transition"><i className="fab fa-instagram fs-5"></i></a>
                            <a href="#" className="text-muted hover-primary transition"><i className="fab fa-linkedin fs-5"></i></a>
                        </div>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="col-6 col-md-4 text-center text-md-start">
                        <h6 className="mb-3 fw-bold small text-uppercase ls-1">Resources</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Learn to trade</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Market insights</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Trading tools</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About us</a></li>
                        </ul>
                    </div>

                    {/* Right Section - Quick Links */}
                    <div className="col-6 col-md-4 text-center text-md-start">
                        <h6 className="mb-3 fw-bold small text-uppercase ls-1">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact support</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Terms & Privacy</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-5 opacity-25" />

                <div className="row">
                    <div className="col-12 text-center small text-muted">
                        <p className="mb-0">Built for traders, by traders. Start your investment journey today.</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;
