export const initialState = {
  items: [],
  total: 0,
  count: 0,
};  
// Reducer has a related State Management 
export default function cartReducer(state, action) {
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