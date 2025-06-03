import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import { useCart } from '../../contexts/useCartContext';
import './CartItem.css'
const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <Card 
        product={item} 
        customButton={
          <div className="cart-item-controls">
            <div className="quantity-controls">
              <button onClick={() => removeFromCart(item.id)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <button 
              className="remove-btn"
              onClick={() => {
                // Remove all quantities of this item
                for (let i = 0; i < item.quantity; i++) {
                  removeFromCart(item.id);
                }
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
              Remove
            </button>
          </div>
        }
      />
    </div>
  );
};

export default CartItem;