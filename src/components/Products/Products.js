import React from "react";
import "./Products.css";

const Products = ({ productItems, handleAddToCart }) => {
  return (
    <div className="products">
      {productItems.map((item, index) => (
        <div className="card">
          <div className="img-box">
            <img className="product-img" src={item.image} alt="No preview" />
          </div>
          <div className="product-name">
            <h3>{item.name}</h3>
          </div>
          <div className="product-price">
            <p>Rs. {item.price}</p>
          </div>
          <div className="btn-div">
            <button className="add-btn" onClick={() => handleAddToCart(item)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
