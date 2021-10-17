import React, { useEffect, useState } from 'react';
import '../Main/Main.css'

const TransportProduct = (props) => {

  const { product, onAdd } = props;
  return (
    <div className="m-3">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button className="booking-btn" onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>

  );
};

export default TransportProduct;