import "./CartPage.css";
import { useCart } from "../../contexts/useCartContext";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
export default function CartPage() {
  const { cart} = useCart();

  return (
    <div className="container cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items">
              <div className="product-list">
                {cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <CartSummary cart={cart} />
        </>
      )}
    </div>
  );
}
