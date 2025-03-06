import HeroPage from "../heropage/heropage";
import Recommended from "../recommended/recommended";
import BestSeller from "../bestseller/bestseller";
import BestSeller2 from "../bestseller/bestseller(2)";
import MostPopular from "../popular/mostpopular";
import MostPopularII from "../popular/mostpopularII";
import BestsellerProductIII from "../bestseller/bestsellerproductIII";
import FeaturedpostPage from "../featuredpost/featuredpost";

const Home = () => {
  return (
    <>
      <HeroPage />
      <Recommended />
      <BestSeller />
      <MostPopular />
      <BestSeller2 />
      <MostPopularII />
      <BestsellerProductIII />
      <FeaturedpostPage />
    </>
  );
};

export default Home;
