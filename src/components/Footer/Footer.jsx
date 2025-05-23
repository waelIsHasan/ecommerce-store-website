import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <div className="footer">
     <div className="footer-up">
      <div className="container">
        <div className="big_row">
          <img className="logo-img" src={logo} alt="" />
          <div className="hotline">
            <i className="fa-solid fa-headset"></i>
            <div className="text">
              <h5> Free 24/24:</h5>
                <h6>(+936) 937 866 905</h6>
                <h6>waelhasan12342@gmail.com</h6>
            </div>
          </div>

          <p>Welcome in WaelShop Where you can find anything</p>
        </div>


        <div className="row">
          <h4>FAQs & Help</h4>

          <div className="links">
            <Link to="/faq">F.A.Q.'s</Link>
            <Link to="/order-tracking">Ordering Tracking</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/events">Events</Link>
            <Link to="/help-center">Help Center</Link>
          </div>
        </div>

        <div className="row">
          <h4>Shipping & Delivery</h4>

          <div className="links">
            <Link to="/delivery-info">Delivery Information</Link>
            <Link to="/discount">Discount</Link>
            <Link to="/payment-shipping">Payment & Shipping</Link>
            <Link to="/delivery-time">Estimated Delivery Time</Link>
            <Link to="/shipping-guide">Shipping Guide</Link>
          </div>
        </div>

        <div className="row">
          <h4>Information</h4>

          <div className="links">
            <Link to="/popular">Popular</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/account">Your Account</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Condition</Link>
          </div>
        </div>
      </div>
      </div>

      <div className="bottom_footer">
        <div className="container">
          <p>
            Copyright &copy; <span>WAEl EC-SHOP</span> all rights reserved
          </p>

          <div className="payment_img">
            <img src="img/payment-1.png" alt="" />
            <img src="img/payment-2.png" alt="" />
            <img src="img/payment-3.png" alt="" />
            <img src="img/payment-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
