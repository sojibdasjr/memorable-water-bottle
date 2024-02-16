import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [purchase, setPurchase] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  // events handler for perchase
  const handlePerchase = (product) => {
    const newPurchase = [...purchase, product];
    setPurchase(newPurchase);
  };
  return (
    <div>
      <h4>Bottles Here : {bottles.length}</h4>
      {/* // purchase */}
      <div className="cart_container">
        <h2>Cart</h2>
        <h4 className="cart"> {purchase.length}</h4>
      </div>
      {/* // products */}
      <div className="bottle_Container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handlePerchase={handlePerchase}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
