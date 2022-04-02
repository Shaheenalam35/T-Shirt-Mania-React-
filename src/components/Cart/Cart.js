import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2>Items selected : {cart.length} </h2>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
