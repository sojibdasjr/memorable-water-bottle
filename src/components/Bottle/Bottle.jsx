import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handlePerchase }) => {
  const { name, price, img } = bottle;
  return (
    <div className="bottle">
      <h4>Name : {name}</h4>
      <img src={img} alt="" />
      <h5>Price : $ {price}</h5>
      <button onClick={() => handlePerchase(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
