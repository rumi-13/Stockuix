import React from 'react';
import SplitSection from '../../components/SplitSection';

function Awards() {
    return ( 
        <SplitSection image="largestBroker.svg" alt="Largest Broker">
            <h2 className="mb-4">Largest Broker in India</h2>
            <h4 className="text-muted mb-3">Award Winning Platform</h4>
            <p className="lead">
                We are proud to be recognized as the largest and most trusted brokerage platform in India. Our commitment to excellence and customer satisfaction has earned us numerous accolades and industry awards.
            </p>
            <h5 className="mt-4">Why Choose Us?</h5>
            <ul className="list-unstyled">
                <li className="mb-2">✓ Best Customer Service</li>
                <li className="mb-2">✓ Lowest Brokerage Fees</li>
                <li className="mb-2">✓ Advanced Trading Tools</li>
            </ul>
        </SplitSection>
     );
}

export default Awards;
