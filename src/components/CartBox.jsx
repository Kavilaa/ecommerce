import React from "react";
import "../style/cart.css";
import { assetsBaseUrl, product } from "../data";

const CartBox = ({ cart }) => {
  return (
    <div className="box">
      <h3>Cart</h3>
      {cart && cart.length === 0 ? (
        <p>Your Cart Is Empty</p>
      ) : (
        <ul>
          {cart &&
            cart.map((item, index) => (
              <li key={index}>
                <img
                  src={`${assetsBaseUrl}/${product.images.originals[selectedImageIndex]}`}
                  alt=""
                />
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
                <p>Total: {item.quantity * item.price}</p>
                <p>Name: {item.name}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CartBox;
