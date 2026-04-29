import React from 'react';
import Hero from './Hero';
import OpenAccount from '../../OpenAccount';
import Brokerage from './Brokerage';
import BrokerageCalculator from './BrokerageCalculator';

function PricingPage() {
    return ( 
        <>
        <Hero/>
        <BrokerageCalculator />
        <OpenAccount/>
        <Brokerage/>
        </>
     );
}

export default PricingPage;
