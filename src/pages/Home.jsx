import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";
function Home() {
  return (
    <div>
      <Annoucement></Annoucement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default Home;
