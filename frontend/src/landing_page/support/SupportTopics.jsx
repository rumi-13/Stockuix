import React from 'react';

function SupportTopics() {
    return (
        <section className="container py-5">
            <div className="row g-4 text-center justify-content-center">
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="p-4 p-lg-5 border rounded-4 h-100 shadow-sm transition-all hover-lift">
                        <i className="fa fa-envelope-open-text fa-3x text-primary mb-4"></i>
                        <h4 className="fw-bold mb-3">Email Support</h4>
                        <p className="text-muted small mb-4">Send us your detailed queries and our team will get back to you within 24 hours.</p>
                        <a href="mailto:support@stockuix.com" className="btn btn-outline-primary px-4 rounded-pill fw-bold">Contact via Email</a>
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="p-4 p-lg-5 border rounded-4 h-100 shadow-sm transition-all hover-lift">
                        <i className="fa fa-phone-alt fa-3x text-primary mb-4"></i>
                        <h4 className="fw-bold mb-3">Phone Support</h4>
                        <p className="text-muted small mb-4">Speak directly with our support specialists for immediate assistance.</p>
                        <p className="fw-bold text-dark fs-5 mb-0">080-4718-1888</p>
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="p-4 p-lg-5 border rounded-4 h-100 shadow-sm transition-all hover-lift">
                        <i className="fa fa-comments fa-3x text-primary mb-4"></i>
                        <h4 className="fw-bold mb-3">Live Chat</h4>
                        <p className="text-muted small mb-4">Chat with our online support representatives for quick help and guidance.</p>
                        <button className="btn btn-primary px-4 rounded-pill fw-bold">Start Live Chat</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5 pt-5 justify-content-center">
                <div className="col-11 col-lg-8">
                    <h3 className="fw-bold mb-4 text-center">Frequently Asked Questions</h3>
                    <div className="accordion border-0 shadow-sm rounded-4 overflow-hidden" id="faqAccordion">
                        <div className="accordion-item border-0 border-bottom">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold py-4 bg-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                    How do I open an account?
                                </button>
                            </h2>
                            <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body text-muted pb-4">
                                    You can open an account online by clicking the "Signup" button and following the digital KYC process.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 border-bottom">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold py-4 bg-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    What are the account opening charges?
                                </button>
                            </h2>
                            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body text-muted pb-4">
                                    Account opening is currently free for all new individual customers.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold py-4 bg-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                    How can I withdraw funds?
                                </button>
                            </h2>
                            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body text-muted pb-4">
                                    Go to the "Funds" section in your dashboard and click "Withdraw" to transfer money to your linked bank account.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SupportTopics;
