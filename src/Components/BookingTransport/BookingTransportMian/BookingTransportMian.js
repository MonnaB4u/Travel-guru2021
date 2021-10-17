import React, { useEffect } from 'react';

import { useState } from 'react';
// import Data from '../../../TravelGuruData/Transport/Data';
import HeaderTransport from '../HeaderTransport/HeaderTransport';
import BookingCart from '../BookingCart/BookingCart';
import Main from '../Main/Main';
import '../Main/Main.css'


const BookingTransportMian = () => {

  const [Data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/transportall')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (

        <div className="container">
            <HeaderTransport countCartItems={cartItems.length}></HeaderTransport>
            <div className="row">       
              <div className="m-4">   </div>
              <Main products={Data} onAdd={onAdd}></Main>
           
               
              <div  className="m-4">      </div>
              <BookingCart
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                ></BookingCart>
        
               
               
               
            </div>
        </div>
    );
};

export default BookingTransportMian;