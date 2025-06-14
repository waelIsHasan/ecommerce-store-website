import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import CustomSearch from "../SearchField/CustomSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart ,faList} from "@fortawesome/free-solid-svg-icons";
import { Outlet } from 'react-router-dom';
import { useCart } from "../../contexts/useCartContext";
export default function Navbar() {
  return (
    <div>
    <header>
      <div className="container top-nav">
        <Link to="" className="logo">
          <img src={logo} alt="" />
        </Link>
        <CustomSearch />
        <HeaderCart/>
      </div>
      <nav>
        <div className="links container">
          <ul id="menu">
            <span className="bg-overlay"></span>
            <i className="fa-regular fa-circle-xmark btn_close_menu"></i>
            <img className="logo_menu" src="img/logo-black.png" alt="" />

            <li className="active">
              <Link to="/" >
                home
              </Link>
            </li>
            <li>
              <Link to="/all-product">all products</Link>
            </li>
            <li>
              <Link to="" href="">
                about us
              </Link>
            </li>
            <li>
              <Link to="" href="">
                contact
              </Link>
            </li>
          </ul>

          <div className="loging_signup">
            <Link to="/auth/signup">
              login <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
            <Link to="/auth/signin">
              sign up <i className="fa-solid fa-user-plus"></i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
    <Outlet/>
    </div>

  );
}


function HeaderCart() {
  const { cart } = useCart();

  return (
    <div className="cart_header">
      <div className="icon_cart">
          <Link to="/cart">

        <FontAwesomeIcon
          style={{ width: "50px" }}
          className="icon"
          icon={faShoppingCart}
        /> </Link>
        <span className="count_item">{cart.count}</span>
      </div>
      <div className="tottal_price">
        <p>My Cart:</p>
        <p className="price_cart_Head">${cart.total.toFixed(2)}</p>
      </div>
    </div>
  );
}
