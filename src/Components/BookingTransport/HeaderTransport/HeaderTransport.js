import React from 'react';
import '../Main/Main.css'
const HeaderTransport = (props) => {
    return (
        <header className="bookingcart roww center">
          <div>
           
              <h1>Booking Cart</h1>
            
          </div>
          <div className="mr-3">
            <h1 href="#/cart">
              Cart{' '}
              {props.countCartItems ? (
                <button className="buttonnbadge">{props.countCartItems}</button>
              ) : (
                ''
              )}
            </h1>{' '}
          </div>
        </header>
    );
};

export default HeaderTransport;