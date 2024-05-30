import "../styles/Promo.scss";
import speaker from "../assets/speaker.png";
import PromoCountDown from "./PromoCountdown";
const Promo = () => {
  return (
    <div className="Promo">
      <div className="Promo-Left">
        <div className="Tag">Categories</div>
        <div className="Title">Enhance Your Music Experience</div>
        <div className="Time">
          <PromoCountDown />
        </div>
        <div className="Butt">
          <button>Buy Now!</button>
        </div>
      </div>
      <div className="Promo-Right">
        <img src={speaker} alt="speaker" height="90%" width="90%" />
      </div>
    </div>
  );
};

export default Promo;
