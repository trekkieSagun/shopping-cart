import React from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="container">
      <div className="cart-items">
        <div className="cart-item-header">
          <h1>Cart Items</h1>
        </div>

        {cartItems.length === 0 && (
          <div className="empty-cart">No items added to cart</div>
        )}
        <div className="">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items-list">
              {/* <img
                className="cart-items-image"
                src={item.image}
                alt={item.name}
              /> */}
              <span>{item.name}</span>
              <p>{item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
