import React from "react";
import "../style/cart.css";
import { assetsBaseUrl, product } from "../data";

const CartBox = ({ cart }) => {
  console.log(cart);
  return (
    <div className="box">
      <h3>Cart</h3>
      {cart && cart.length === 0 ? (
        <p>Your Cart Is Empty</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart &&
              cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img
                    className="product-image"
                    src={`${assetsBaseUrl}/${item.productImageUrl}`}
                    alt=""
                  />
                  <div className="product-info">
                    <p className="product-name">{item.productName}</p>{" "}
                    <p className="product-price">
                      {"$"}
                      {item.productPrice + "x" + item.productQuantity}
                      <span className="whole-price">
                        {" "}
                        {"$"}
                        {item.productQuantity * item.productPrice}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
          </ul>
          <button className="checkout">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartBox;
