import React, { useEffect, useState } from 'react';
import '../Main/Main.css'

const TransportProduct = (props) => {

  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button className="button" onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>

  );
};

export default TransportProduct;