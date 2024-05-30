import "../styles/Header.scss";
import arrow from "../assets/arrow.png";
import logo from "../assets/Logo.png";
import love from "../assets/love.png";
import cart from "../assets/Cart.png";

const Header = () => {
  return (
    <header>
      <div className="Header-Top">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>Shop Now</span>
          <span>
            English <img src={arrow} alt="arrow" />
          </span>
        </p>
      </div>
      <div className="Header-Bottom">
        <div className="Header-Bottom-Left">
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="Header-Bottom-Right">
          <input type="text" placeholder="What are you looking for?" />
          <img src={love} alt="love" />
          <img src={cart} alt="cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
