import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const Routes = ({
  productItems,
  cartItems,
  handleAddToCart,
  handleRemoveProduct,
  handleClearCart,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products
            productItems={productItems}
            handleAddToCart={handleAddToCart}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddToCart={handleAddToCart}
            handleRemoveProduct={handleRemoveProduct}
            handleClearCart={handleClearCart}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
