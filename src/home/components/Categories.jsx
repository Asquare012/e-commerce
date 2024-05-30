import "../styles/Categories.scss";
import catData from "./Data/CategoriesData";
const Categories = () => {
  return (
    <div className="Categories">
      <div className="Categories-Top">
        <span className="Up">
          <span className="Box"></span>
          Categories
        </span>
        <span className="Down">Browse By Category</span>
      </div>
      <div className="Categories-Bottom">
        <ol>
          {catData.map((data) => {
            const { id, img, name } = data;
            return (
              <li key={id}>
                <img src={img} alt={name} />
                <br />
                {name}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Categories;
