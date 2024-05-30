import "../styles/BestProduct.scss";
import data from "./Data/BestSellingData";
import love from "../assets/love.png";
import eye from "../assets/eye.png";

const BestProduct = () => {
  return (
    <div className="Best-Product">
      <div className="Best-Top">
        <div className="Top-Left">
          <span className="Up">
            <span className="Box"></span>
            Today’s
          </span>
          <span className="Down">Best Selling Products</span>
        </div>
        <div className="Top-Right">
          <button>View All</button>
        </div>
      </div>
      <div className="Best-Bottom">
        <ol>
          {data.map((product) => {
            const { id, name, img, price, old_price, ratings } = product;

            return (
              <li key={id}>
                <div className="Product-Top">
                  <div
                    className="Img-Section"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <div className="Img-Section-Right">
                      <img src={love} alt="love" height="21px" width="21px" />
                      <img src={eye} alt="eye" height="25px" width="25px" />
                    </div>
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
    </div>
  );
};

export default BestProduct;
