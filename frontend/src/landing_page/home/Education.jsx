import React from 'react';
import SplitSection from '../../components/SplitSection';

function Education() {
    return ( 
        <SplitSection image="education.svg" alt="Education">
            <h2 className="mb-4">Free and open market education</h2>
            <p className="mb-3">
                Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="btn btn-link p-0 d-block mb-4">Varsity →</a>

            <h5 className="mb-3">TradingQ&A</h5>
            <p className="mb-3">
                TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a href="#" className="btn btn-link p-0">TradingQ&A →</a>
        </SplitSection>
     );
}

export default Education;
