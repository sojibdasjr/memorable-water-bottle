import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemove }) => {
  const { img } = cart;
  return (
    <div>
      <h4> Cart: {cart.length}</h4>
      <div className="cart_containr">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img}></img>
            <button onClick={() => handleRemove(bottle.id)}>Remobe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
