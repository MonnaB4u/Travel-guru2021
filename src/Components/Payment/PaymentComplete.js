import React from 'react';
import happyimg from '../../images/happy image.gif'

const PaymentComplete = () => {
    return (
        <div className="ml-5 text-center">

        
        <div className="container  mt-5 wel m-4">
            <h1>Payment successful</h1>
            <img src={happyimg} alt=""/>
        </div>
        </div>
    );
};

export default PaymentComplete;