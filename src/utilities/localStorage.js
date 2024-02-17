// setItem (key, value) (here key is purcasheProducts and the value is prodcuts' it's form other component and it's a arry. so we need )

const saveProductToLS = (cartData) => {
  const productsStringiFied = JSON.stringify(cartData); // here products is an array so we need first convert it to string

  localStorage.setItem("cart", productsStringiFied); // now we call setItem and key = purcasheProducts and valu is productsStringFied
};

// getItem(key) function
const getProducts = () => {
  const storCartString = localStorage.getItem("cart");
  if (storCartString) {
    return JSON.parse(storCartString);
  } else {
    return [];
  }
};

const addToLS = (id) => {
  const products = getProducts();
  products.push(id);
  //save to local stroge
  saveProductToLS(products);
};

// remove form local storage
const removeFromLs = (id) => {
  const callGetItemFunc = getProducts();
  const remaining = callGetItemFunc.filter((idx) => idx !== id);
  saveProductToLS(remaining);
};

export { addToLS, getProducts, removeFromLs };
