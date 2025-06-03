import { useCart } from "../../contexts/useCartContext";
import './CartSummary.css'
export default function CartSummary({cart}){
  const { clearCart } = useCart();
  return <div className="cart-summary">
            <div className="summary-header">
              <h3>Order Summary</h3>
            </div>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${(cart.total * 0.01).toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total-row">
                <span>Total</span>
                <span className="total-price">${cart.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="summary-actions">
              <button onClick={clearCart} className="clear-btn">
                Clear Cart
              </button>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
}