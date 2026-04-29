import React from 'react';

function Brokerage() {
    return (
        <div className="container py-5 border-top border-light">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h3 className="fs-4 fw-bold mb-5 text-dark text-center text-uppercase ls-1">Detailed Brokerage Structure</h3>
                    <div className="table-responsive shadow-sm rounded">
                        <table className="table table-hover mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th className="fw-semibold py-3 ps-4">Segment</th>
                                    <th className="fw-semibold py-3">Brokerage Fee</th>
                                </tr>
                            </thead>
                            <tbody className="text-muted">
                                <tr>
                                    <td className="ps-4 py-3 fw-bold text-dark">Equity Delivery</td>
                                    <td className="py-3">Free (₹ 0)</td>
                                </tr>
                                <tr>
                                    <td className="ps-4 py-3 fw-bold text-dark">Equity Intraday</td>
                                    <td className="py-3">0.03% or ₹20 (whichever is lower)</td>
                                </tr>
                                <tr>
                                    <td className="ps-4 py-3 fw-bold text-dark">F&O - Futures</td>
                                    <td className="py-3">0.03% or ₹20 (whichever is lower)</td>
                                </tr>
                                <tr>
                                    <td className="ps-4 py-3 fw-bold text-dark">F&O - Options</td>
                                    <td className="py-3">Flat ₹20 per executed order</td>
                                </tr>
                                <tr>
                                    <td className="ps-4 py-3 fw-bold text-dark">Currency Futures</td>
                                    <td className="py-3">0.03% or ₹20 (whichever is lower)</td>
                                </tr>
                                <tr>
                                    <td className="ps-4 py-3 fw-bold text-dark">Currency Options</td>
                                    <td className="py-3">Flat ₹20 per executed order</td>
                                </tr>
                                <tr>
                                    <td className="ps-4 py-3 fw-bold text-dark">Commodity Futures</td>
                                    <td className="py-3">0.03% or ₹20 (whichever is lower)</td>
                                </tr>
                                <tr>
                                    <td className="ps-4 py-3 fw-bold text-dark">Commodity Options</td>
                                    <td className="py-3">Flat ₹20 per executed order</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-5 text-center">
                        <p className="text-muted small">
                            * Standard regulatory charges, STT, and GST are applicable as per government norms. 
                            Use the calculator above for a precise breakdown.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
