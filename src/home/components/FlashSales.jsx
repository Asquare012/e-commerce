import "../styles/FlashSales.scss";
import flashSalesData from "./Data/FlashSalesData";
import FlashCountDown from "./FlashSalesCountdown";
import love from "../assets/love.png";
import eye from "../assets/eye.png";

const FlahSales = () => {
  return (
    <div className="FlashSales">
      <div className="FlashSales-Top">
        <div className="Top-Left">
          <span className="Up">
            <span className="Box"></span>
            Today’s
          </span>
          <span className="Down">Flash Sales</span>
        </div>
        <div className="Top-Right">
          <FlashCountDown />
        </div>
      </div>
      <div className="FlashSales-Mid">
        <ol>
          {flashSalesData.map((product) => {
            const { id, name, img, price, old_price, ratings } = product;

            return (
              <li key={id}>
                <div className="Product-Top">
                  <div
                    className="Img-Section"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <div className="Img-Section-Left">
                      <div className="Left-Box">30%</div>
                    </div>
                    <div className="Img-Section-Right">
                      <img src={love} alt="love" height="21px" width="21px" />
                      <img src={eye} alt="eye" height="25px" width="25px" />
                    </div>
                  </div>
                  <div className="Cart-Button">
                    <button>Add To Cart</button>
                  </div>
                </div>
                <div className="Product-Bottom">
                  <div className="Product-Name">{name}</div>
                  <div className="Product-Price">
                    {price} <span>{old_price}</span>
                  </div>
                  <div className="Prodcut-Rating">{ratings}(85)</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="FlashSales-Bottom">
        <button>View All Products</button>
      </div>
    </div>
  );
};
export default FlahSales;
