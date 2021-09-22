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

  return (
    <div>
      <Router>
        <Header />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
        />
      </Router>
    </div>
  );
};

export default App;
