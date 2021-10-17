import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../App';
import './Payment.css'

const Payment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();

    const paysucess = () => {
        history.push('/paymentsucess')
        alert('are you sure?')
    }

    return (

        <div className="body">
            <div className="welcome m-4">

                <h2>Hey, {loggedInUser.displayName}</h2>
                <h3>Weolcome To Payment Section</h3>
                <p>Please Fillup The Form For Success your Payment</p>
                <div className="logout d-flex justify-content-end">
                    <button onClick={() => setLoggedInUser({})}>Sign out</button>
                </div>
            </div>
            <div class="card">
                {/* <div class="card-top cardtop border-bottom text-center">
                     <a href="#"> Back to shop</a> 
                     <span id="logo">BBBootstrap.com</span> 
                     </div> */}
                <div class="card-body cardbody">
                    <div class="row upper ro up">
                        <span><i class="fa fa-check-circle-o"></i> Booking Hotel</span>
                        {/* <span><i class="fa fa-check-circle-o"></i> Order details</span> */}
                        {/* <span id="payment"><span id="three">3</span>Payment</span> */}
                    </div>

                    <div class="row ro">
                        <div class="col-md-7">
                            <div class="left border">
                                <div class="row">
                                    <span class="header head headSpan">Payment</span>
                                    <div class="icons"> <img src="https://img.icons8.com/color/48/000000/visa.png" />
                                        <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                                        <img src="https://img.icons8.com/color/48/000000/maestro.png" />
                                    </div>
                                </div>

                                <form className="form">
                                    <span>Cardholder's name:</span>
                                    <input className="input" placeholder="input your name" value={loggedInUser.displayName} />
                                    <span>Card Number:</span>
                                    <input className="input" placeholder="input your bank number" />
                                    <div class="row ro">
                                        <div class="col-4">
                                            <span>Expiry date:</span>
                                            <input className="input" placeholder="YY/MM" />
                                        </div>
                                        <div class="col-4">
                                            <span>CVV:</span>
                                            <input className="input" id="cvv" />
                                        </div>
                                    </div>
                                    <input className="input" type="checkbox" id="save_card" class="align-left" />
                                    <label className="label" for="save_card">Save card details to wallet</label>
                                </form>

                            </div>
                            <button onClick={() => paysucess()} class="btnn">Pay bill</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;