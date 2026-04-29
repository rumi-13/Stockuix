import React from 'react';
import SplitSection from '../../components/SplitSection';

function Products() {
    return (
        <div className="border-top">
            {/* Kite Section */}
            <SplitSection 
                image="kite.png" 
                alt="Kite Trading Platform" 
                reverse={false}
            >
                <h2 className="display-6 fw-bold mb-4">Kite</h2>
                <p className="text-muted fs-5 mb-4">
                    Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                </p>
                <div className="d-flex gap-4 mb-4">
                    <a href="#" className="text-decoration-none">Learn more <i className="fa fa-long-arrow-right"></i></a>
                    <a href="#" className="text-decoration-none">Kite Connect <i className="fa fa-long-arrow-right"></i></a>
                </div>
               
            </SplitSection>

            {/* Console Section */}
            <SplitSection 
                image="console.png" 
                alt="Console Analytics" 
                reverse={true}
            >
                <h2 className="display-6 fw-bold mb-4">Console</h2>
                <p className="text-muted fs-5 mb-4">
                    The central dashboard for your StockUIX account. Gain insights into your investments with advanced reporting and visualisations.
                </p>
                <a href="#" className="text-decoration-none fs-5">Learn more <i className="fa fa-long-arrow-right"></i></a>
            </SplitSection>

            {/* Coin Section */}
            <SplitSection 
                image="coin.png" 
                alt="Coin Mutual Funds" 
                reverse={false}
            >
                <h2 className="display-6 fw-bold mb-4">Coin</h2>
                <p className="text-muted fs-5 mb-4">
                    Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
                </p>
                <a href="#" className="text-decoration-none fs-5">Learn more <i className="fa fa-long-arrow-right"></i></a>
              
            </SplitSection>

        
        </div>
    );
}

export default Products;
