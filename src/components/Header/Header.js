import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Shop App
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="cart">
              <i className="fas fa-shopping-cart" />
              {cartItems?.length === 0 ? "" : <span> {cartItems?.length}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
