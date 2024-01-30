import React, { useState } from "react";
import { assetsBaseUrl, product } from "../data";
import "../style/product.css";
import Buy from "./Buy";
import eventManager from "../EventManager";

const ProductDetail = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartList, setCartList] = useState([]);

  const productInfo = {
    productName: "Fall Limited Edition Sneakers",
    productQuantity: quantity,
    productPrice: 125,
    productImageUrl: product.images.thumbnails[0],
  };

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : product.images.thumbnails.length - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < product.images.thumbnails.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    setCartList([...cartList, productInfo]);
    eventManager.publish("addToCart", cartList);
  };

  return (
    <div
      className="container prod"
      style={{ display: "flex", marginTop: "70px" }}
    >
      <div className="images">
        <div className="main-image">
          <img
            src={`${assetsBaseUrl}/${product.images.originals[selectedImageIndex]}`}
            alt={`Product Original ${selectedImageIndex + 1}`}
          />
          <button className="prev-button" onClick={handlePrevClick}>
            {"<"}
          </button>
          <button className="next-button" onClick={handleNextClick}>
            {">"}
          </button>
        </div>
        <div className="cover-images">
          {product.images.thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={`${assetsBaseUrl}/${thumbnail}`}
              alt={`Product Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              className={index === selectedImageIndex ? "selected" : ""}
            />
          ))}
        </div>
      </div>
      <div className="description">
        <p className="main-title">Sneaker Company</p>
        <h1 className="title">Fall Limited Edition Sneakers</h1>

        <div className="rate">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={index < 4 ? "yellow" : "none"}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: index === 0 ? "10px" : "0" }}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
          <p className="rate-text">4.2 out of 5</p>
        </div>

        <p className="info">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="price">
          <div className="for-flex-price">
            <span className="new-price">125$</span>
            <span className="sale">50%</span>
          </div>
          <span className="old-price">250$</span>
        </div>

        <Buy
          productInfo={productInfo}
          quantity={quantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
