import React from 'react';
import happyimg from '../../images/happy image.gif'

const PaymentComplete = () => {
    return (
        <div className="container justify-content-center mt-5">
            <h1>Payment successful</h1>
            <img src={happyimg} alt=""/>
        </div>
    );
};

export default PaymentComplete;