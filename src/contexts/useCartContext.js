import React, { createContext, useContext, useEffect, useReducer , useState } from 'react';

const CartContext = createContext(); // create a Context to put state in it 

const initialState = {
  items: [],
  total: 0,
  count: 0,
};  // the initial State the items (Prodects and total price and count)

// Reducer has a related State Management 
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          ),
          total: state.total + action.payload.price,
          count: state.count + 1,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
          count: state.count + 1,
        };
      }

    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) return state;
      
      if (itemToRemove.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload 
              ? { ...item, quantity: item.quantity - 1 } 
              : item
          ),
          total: state.total - itemToRemove.price,
          count: state.count - 1,
        };
      } else {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          total: state.total - itemToRemove.price,
          count: state.count - 1,
        };
      }

    case 'CLEAR_CART':
      return initialState;

    case 'INIT_CART':
      // Ensure we have valid cart structure
      return {
        items: action.payload.items || [],
        total: action.payload.total || 0,
        count: action.payload.count || 0,
      };
      

    default:
      return state;
  }
}

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