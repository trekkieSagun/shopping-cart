import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddToCart,
  handleRemoveProduct,
  handleClearCart,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="container">
      <div className="cart-items">
        <div className="cart-item-header">
          <h1>Cart Items</h1>
        </div>

        {cartItems.length === 0 && (
          <div className="empty-cart">No items added to cart</div>
        )}

        {cartItems.length > 0 && (
          <div>
            <div className="cart-container">
              <button className="btn btn-primary" onClick={handleClearCart}>
                Clear Cart
              </button>
              <div className="cart-items-list">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  {cartItems.map((item, index) => (
                    <tbody key={item.id}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                          {" "}
                          <img
                            className="cart-items-image"
                            src={item.image}
                            alt={item.name}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          {" "}
                          <div className="cart-actions">
                            <button
                              className="btn btn-danger"
                              onClick={() => handleRemoveProduct(item)}
                            >
                              -
                            </button>
                            <span className="noOfItems">{item.quantity}</span>
                            <button
                              className="btn btn-info"
                              onClick={() => handleAddToCart(item)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>{item.quantity * item.price}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>

            <div className="total-price">
              <h4>Total Price</h4>
              Rs. {totalPrice} -/
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
