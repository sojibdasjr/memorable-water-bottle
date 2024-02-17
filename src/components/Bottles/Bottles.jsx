import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLS,
  getProducts,
  removeFromLs,
} from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

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
    addToLS(product.id);
  };

  // load cart from local storage
  useEffect(() => {
    if (bottles.length) {
      const storedCart = getProducts();
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setPurchase(savedCart);
    }
  }, [bottles]);

  const handleRemove = (id) => {
    const remainingCart = purchase.filter((bottle) => bottle.id !== id);
    setPurchase(remainingCart);
    removeFromLs(id);
  };

  return (
    <div>
      <h4>Bottles Here : {bottles.length}</h4>
      {/* // purchase */}

      <Cart handleRemove={handleRemove} cart={purchase}></Cart>
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
