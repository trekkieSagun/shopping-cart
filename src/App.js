import React, { useState } from "react";

import "./App.css";
import data from "./components/Data";
import Header from "./components/Header/Header";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/Routes";
const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const hanldeClearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveProduct={handleRemoveProduct}
          hanldeClearCart={hanldeClearCart}
        />
      </Router>
    </div>
  );
};

export default App;
