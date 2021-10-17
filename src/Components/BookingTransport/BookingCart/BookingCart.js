import React from 'react';
import { useHistory } from 'react-router';
import '../Main/Main.css'
const BookingCart = (props) => {

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice;

  const history = useHistory();

    const paysucess=()=>{
        history.push('/payment')
        alert('are you sure?')
    }
    return (
        <aside className="block coll1">
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="roww">
              <div className=" coll2">{item.name}</div>
              <div className=" coll2">
                <button onClick={() => onRemove(item)} className="remove button">
                  -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add button">
                  +
                </button>
              </div>
  
              <div className=" coll2 text-right">
                {item.qty} x ${item.price}
              </div>
            </div>
          ))}
  
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 ">${itemsPrice.toFixed(2)}</div>
              </div>

              <div className=" row">
                <div className="col-2">Tax Price</div>
                <div className="col-1  text-right">${taxPrice.toFixed(2)}</div>
              </div>
              {/* <div className=" row">
                <div className="col-2">Shipping Price</div>
                <div className="col-1 text-right ">
                  ${shippingPrice.toFixed(2)}
                </div>
              </div> */}
  
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>

              <hr />
              <div className="row">
                <button className="booking-btn" onClick={() => paysucess()}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    );
};

export default BookingCart;