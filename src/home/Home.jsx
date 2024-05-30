import "./Home.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FlahSales from "./components/FlashSales";
import Categories from "./components/Categories";
import BestProduct from "./components/BestProducts";
import Promo from "./components/Promo";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <FlahSales />
      <Categories />
      <BestProduct />
      <Promo />
    </div>
  );
};
export default Home;
