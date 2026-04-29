import React from 'react';
import ProductCard from '../../components/ProductCard';

function Universe() {
    const products = [
        { id: 1, name: 'Smallcase', description: 'Thematic investment platforms', icon: 'fa-briefcase' },
        { id: 2, name: 'Streak', description: 'Algo & strategy platform', icon: 'fa-bolt' },
        { id: 3, name: 'Sensibull', description: 'Options trading platform', icon: 'fa-chart-pie' },
        { id: 4, name: 'GoldenPI', description: 'Bonds trading platform', icon: 'fa-coins' },
        { id: 5, name: 'Ditto', description: 'Personalized insurance', icon: 'fa-shield-alt' },
        { id: 6, name: 'StockuiX-Edu', description: 'Trading education', icon: 'fa-graduation-cap' }
    ];

    return (
        <div className="container py-5 text-center">
            <div className="row justify-content-center mb-5">
                <div className="col-11 col-md-10 col-lg-8">
                    <h2 className="display-6 fw-bold mb-4">The StockUIX Universe</h2>
                    <p className="text-muted mb-0">Extend your trading experience with our partner platforms and deep ecosystem integrations.</p>
                </div>
            </div>
            
            <div className="row g-4 mb-5">
                {products.map(p => (
                    <div key={p.id} className="col-md-6 col-lg-4">
                        <ProductCard {...p} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Universe;
