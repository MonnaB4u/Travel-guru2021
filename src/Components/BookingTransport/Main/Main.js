import React from 'react';
import TransportProduct from './TransportProduct';
import '../Main/Main.css'
const Main = (props) => {
    const { products, onAdd } = props;
  return (
    <main className="block coll2">
      <h2>Book your Favourite Transport</h2>
      <div className="roww">
        {products.map((product) => (
          <TransportProduct key={product.id} product={product} onAdd={onAdd}></TransportProduct>
        ))}
      </div>
    </main>
  )
};

export default Main;