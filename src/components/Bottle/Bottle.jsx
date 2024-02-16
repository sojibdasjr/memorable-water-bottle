import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  console.log(bottle);
  const { category, name, seller, price, img } = bottle;
  return (
    <div className="bottle">
      <h4>Name : {name}</h4>
      <img src={img} alt="" />
      <h5>Price : $ {price}</h5>
    </div>
  );
};

export default Bottle;
