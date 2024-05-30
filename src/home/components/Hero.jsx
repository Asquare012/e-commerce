import "../styles/Hero.scss";
import applePhone from "../assets/phone.png";
import appleLogo from "../assets/apple.png";
import arrowRight from "../assets/arrow-right.png";
import rightDrop from "../assets/right-drop.png";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Left">
        <ol>
          <li>
            Woman’s Fashion <img src={rightDrop} alt="rightDrop" />
          </li>
          <li>
            Men’s Fashion <img src={rightDrop} alt="rightDrop" />
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ol>
      </div>
      <div className="Hero-Right">
        <div className="Right-Container">
          <div className="Container-Left">
            <div className="Left-Top">
              <img src={appleLogo} alt="logo" /> iPhone 14 Series
            </div>
            <div className="Left-Mid">Up to 10% off Voucher</div>
            <div className="Left-Bottom">
              Shop Now <img src={arrowRight} alt="arrow-right" />
            </div>
          </div>
          <div className="Container-Right">
            <img src={applePhone} alt="apple" height="90%" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
