import React, { useState, useEffect } from 'react';

function BrokerageCalculator() {
    const [buyPrice, setBuyPrice] = useState(1000);
    const [sellPrice, setSellPrice] = useState(1100);
    const [quantity, setQuantity] = useState(100);
    
    const [charges, setCharges] = useState({
        brokerage: 0,
        stt: 0,
        transaction: 0,
        gst: 0,
        sebi: 0,
        stamp: 0,
        total: 0,
        netProfit: 0
    });

    useEffect(() => {
        const turnover = (Number(buyPrice) + Number(sellPrice)) * Number(quantity);
        const buyValue = Number(buyPrice) * Number(quantity);
        const sellValue = Number(sellPrice) * Number(quantity);
        
        const buyBrokerage = Math.min(buyValue * 0.0003, 20);
        const sellBrokerage = Math.min(sellValue * 0.0003, 20);
        const totalBrokerage = buyBrokerage + sellBrokerage;

        const stt = sellValue * 0.00025;
        const transaction = turnover * 0.0000345;
        const gst = (totalBrokerage + transaction) * 0.18;
        const sebi = turnover * 0.0000001;
        const stamp = buyValue * 0.00003;

        const totalCharges = totalBrokerage + stt + transaction + gst + sebi + stamp;
        const grossProfit = sellValue - buyValue;
        const netProfit = grossProfit - totalCharges;

        setCharges({
            brokerage: totalBrokerage.toFixed(2),
            stt: stt.toFixed(2),
            transaction: transaction.toFixed(2),
            gst: gst.toFixed(2),
            sebi: sebi.toFixed(2),
            stamp: stamp.toFixed(2),
            total: totalCharges.toFixed(2),
            netProfit: netProfit.toFixed(2)
        });
    }, [buyPrice, sellPrice, quantity]);

    return (
        <div className="container-fluid px-lg-5 py-5 bg-white border-top">
            <div className="row g-4">
                {/* Column 1: Inputs */}
                <div className="col-lg-4">
                    <h5 className="fw-bold mb-4 text-dark text-uppercase ls-1 small">Calculator Inputs</h5>
                    <div className="card border-1 border-light p-4 h-100 shadow-sm" style={{ backgroundColor: '#fdfdfd' }}>
                        <div className="mb-4">
                            <label className="form-label fw-bold text-muted small text-uppercase ls-1">Buy Price (₹)</label>
                            <input 
                                type="number" 
                                className="form-control form-control-lg bg-light border-0" 
                                value={buyPrice} 
                                onChange={(e) => setBuyPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-bold text-muted small text-uppercase ls-1">Sell Price (₹)</label>
                            <input 
                                type="number" 
                                className="form-control form-control-lg bg-light border-0" 
                                value={sellPrice} 
                                onChange={(e) => setSellPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            <label className="form-label fw-bold text-muted small text-uppercase ls-1">Quantity</label>
                            <input 
                                type="number" 
                                className="form-control form-control-lg bg-light border-0" 
                                value={quantity} 
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Column 2: Breakdown */}
                <div className="col-lg-4">
                    <h5 className="fw-bold mb-4 text-dark text-uppercase ls-1 small">Charges Breakdown</h5>
                    <div className="card border-0 p-4 h-100 shadow-sm" style={{ backgroundColor: '#f4f7fa', border: '1px solid #e2e8f0' }}>
                        <div className="d-flex justify-content-between mb-3 border-bottom border-light pb-2">
                            <span className="text-muted small fw-medium">Brokerage</span>
                            <span className="fw-bold text-dark">₹ {charges.brokerage}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3 border-bottom border-light pb-2">
                            <span className="text-muted small fw-medium">STT Total</span>
                            <span className="fw-bold text-dark">₹ {charges.stt}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3 border-bottom border-light pb-2">
                            <span className="text-muted small fw-medium">Transaction Charges</span>
                            <span className="fw-bold text-dark">₹ {charges.transaction}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3 border-bottom border-light pb-2">
                            <span className="text-muted small fw-medium">GST</span>
                            <span className="fw-bold text-dark">₹ {charges.gst}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3 border-bottom border-light pb-2">
                            <span className="text-muted small fw-medium">SEBI Charges</span>
                            <span className="fw-bold text-dark">₹ {charges.sebi}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-4 border-bottom border-light pb-2">
                            <span className="text-muted small fw-medium">Stamp Duty</span>
                            <span className="fw-bold text-dark">₹ {charges.stamp}</span>
                        </div>
                        
                        <div className="mt-auto pt-3">
                            <div className="d-flex justify-content-between align-items-center bg-white p-3 rounded-3 shadow-sm border border-light">
                                <span className="small text-uppercase fw-bold text-muted">Net P&L</span>
                                <span className={`h5 mb-0 fw-bold ${charges.netProfit >= 0 ? 'text-success' : 'text-danger'}`}>
                                    ₹ {charges.netProfit}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 3: Guidelines */}
                <div className="col-lg-4">
                    <h5 className="fw-bold mb-4 text-dark text-uppercase ls-1 small">Important Notes</h5>
                    <div className="card border-1 border-light p-4 h-100 shadow-sm" style={{ backgroundColor: '#fdfdfd' }}>
                        <ul className="list-group list-group-flush small text-muted lh-base">
                            <li className="list-group-item border-0 bg-transparent px-0 py-2">
                                <i className="fa fa-info-circle me-2 text-primary opacity-75"></i>
                                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                            </li>
                            <li className="list-group-item border-0 bg-transparent px-0 py-2">
                                <i className="fa fa-envelope me-2 text-primary opacity-75"></i>
                                Digital contract notes will be sent via e-mail.
                            </li>
                            <li className="list-group-item border-0 bg-transparent px-0 py-2">
                                <i className="fa fa-file-alt me-2 text-primary opacity-75"></i>
                                Physical copies of contract notes: ₹20 per note + courier charges.
                            </li>
                            <li className="list-group-item border-0 bg-transparent px-0 py-2">
                                <i className="fa fa-globe me-2 text-primary opacity-75"></i>
                                NRI (non-PIS): 0.5% or ₹100/order for equity (lower).
                            </li>
                            <li className="list-group-item border-0 bg-transparent px-0 py-2">
                                <i className="fa fa-globe-asia me-2 text-primary opacity-75"></i>
                                NRI (PIS): 0.5% or ₹200/order for equity (lower).
                            </li>
                            <li className="list-group-item border-0 bg-transparent px-0 py-2">
                                <i className="fa fa-exclamation-triangle me-2 text-primary opacity-75"></i>
                                Debit balance accounts: ₹40 per order instead of ₹20.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrokerageCalculator;
