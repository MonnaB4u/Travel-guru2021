import React from 'react';
import { useHistory } from 'react-router';
import './Payment.css'

const Payment = () => {

    const history = useHistory();

    const paysucess=()=>{
        history.push('/paymentsucess')
        alert('are you sure?')
    }

    return (

        <div className="body">
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
                                     <input className="input" placeholder="input your name" />
                                      <span>Card Number:</span> 
                                      <input  className="input" placeholder="input your bank number" />
                                    <div class="row ro">
                                        <div class="col-4">
                                            <span>Expiry date:</span>
                                             <input  className="input" placeholder="YY/MM"/>
                                             </div>
                                            <div class="col-4">
                                                <span>CVV:</span> 
                                                <input  className="input" id="cvv"/> 
                                                </div>
                                            </div>
                                             <input  className="input" type="checkbox" id="save_card" class="align-left"/> 
                                            <label className="label" for="save_card">Save card details to wallet</label>
                                       </form>

                                        </div>
                                        <button onClick={()=>paysucess()} class="btnn">Place order</button>
                                    </div>

                                    {/* <div class="col-md-5">
                                        <div class="right border">
                                            <div class="header">Order Summary</div>
                                            <p>2 items</p>
                                            <div class="row item">
                                                <div class="col-4 align-self-center"><img class="img-fluid" src="https://i.imgur.com/79M6pU0.png"/></div>
                                                    <div class="col-8">
                                                        <div class="row"><b>$ 26.99</b></div>
                                                        <div class="row text-muted">Be Legandary Lipstick-Nude rose</div>
                                                        <div class="row">Qty:1</div>
                                                    </div>
                                                </div>
                                                <div class="row item">
                                                    <div class="col-4 align-self-center"><img class="img-fluid" src="https://i.imgur.com/Ew8NzKr.jpg"/></div>
                                                        <div class="col-8">
                                                            <div class="row"><b>$ 19.99</b></div>
                                                            <div class="row text-muted">Be Legandary Lipstick-Sheer Navy Cream</div>
                                                            <div class="row">Qty:1</div>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                        <div class="row lower">
                                                            <div class="col text-left">Subtotal</div>
                                                            <div class="col text-right">$ 46.98</div>
                                                        </div>
                                                        <div class="row lower">
                                                            <div class="col text-left">Delivery</div>
                                                            <div class="col text-right">Free</div>
                                                        </div>
                                                        <div class="row lower">
                                                            <div class="col text-left"><b>Total to pay</b></div>
                                                            <div class="col text-right"><b>$ 46.98</b></div>
                                                        </div>
                                                        <div class="row lower">
                                                            <div class="col text-left">
                                                                <a href="#"><u>Add promo code</u></a>
                                                                
                                                                </div>
                                                        </div>
                                                         <button class="btnn">Place order</button>
                                                        <p class="text-muted text-center">Complimentary Shipping & Returns</p>
                </div>
                                                </div>
                                            </div> */}
                                        {/* </div> */}
                                        <div> 

                                        </div>
                                    </div>            


        </div>
        </div>
        </div>

    );
};

export default Payment;