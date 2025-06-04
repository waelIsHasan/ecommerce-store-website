import React, { createContext, useContext, useEffect, useReducer , useState } from 'react';
import cartReducer from '../services/CartReducer';
import { initialState } from '../services/CartReducer';
const CartContext = createContext(); // create a Context to put state in it 

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'INIT_CART', payload: JSON.parse(savedCart) });
    }
    setIsInitialized(true);

  }, []);

  // Save cart to localStorage
  useEffect(() => {
     if (isInitialized) {
    localStorage.setItem('cart', JSON.stringify(state));
     }
  }, [state , isInitialized]);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        isInitialized 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);