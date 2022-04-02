import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let command;
  if (cart.length === 0) {
    command = (
      <div>
        {" "}
        <p>Please add at least one item</p>;
      </div>
    );
  } else if (cart.length === 1) {
    command = <p>Please add more... </p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item</small>
      </p>
    );
  }
  return (
    <div className="orange">
      <h2>Items selected : {cart.length} </h2>

      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {cart.length === 3 && (
        <div className="green">
          <h3>Trigonal order ...will win one free</h3>{" "}
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
    </div>
  );
};

export default Cart;
