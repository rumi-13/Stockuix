import React from 'react';
import SplitSection from '../../components/SplitSection';

function Stats() {
    return ( 
        <SplitSection image="ecosystem.png" alt="Trading Ecosystem" reverse={true}>
            <h2 className="mb-4">Our Trading Ecosystem</h2>
            <h4 className="text-muted mb-3">Everything You Need to Succeed</h4>
            <p className="lead">
                Our comprehensive ecosystem provides all the tools and features you need for successful trading. From advanced charting tools to real-time market data, we've got you covered.
            </p>
            <h5 className="mt-4">Key Features:</h5>
            <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Real-time Market Data</li>
                <li className="mb-2">✓ Advanced Analytics</li>
                <li className="mb-2">✓ Mobile Trading App</li>
            </ul>
            <div>
                <a href="#" className="btn btn-link me-3">Explore our products</a>
                <a href="#" className="btn btn-link">Try kite</a>
            </div>
        </SplitSection>
     );
}

export default Stats;
