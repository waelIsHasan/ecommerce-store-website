import React from 'react';
import './Card.css'; 
const API_BASE_URL = 'http://localhost:1337'; // Replace with your API base URL

//http://localhost:1337/api/products?filters[category][id]=4&populate=*
const Card = ({ product }) => {
  const { name, price, originalPrice, image, rating, reviews, isNew, discount } = product;
  const imageUrl = `${API_BASE_URL}${image?.url}`;  
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
        {isNew && <span className="product-badge new">New</span>}
        {discount > 0 && <span className="product-badge discount">-{discount}%</span>}
        <button className="wishlist-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="price-container">
          <span className="current-price">${price.toFixed(2)}</span>
          {originalPrice > price && (
            <span className="original-price">${originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="rating-container">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < rating ? "#FFD700" : "#DDDDDD"}
                stroke="#FFD700"
                strokeWidth="1"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <span className="review-count">({reviews})</span>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;