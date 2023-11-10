import Annoucement from "../components/Annoucement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from '../components/Slider'
function Home() {
  return (
    <div>
      <Annoucement></Annoucement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
    </div>
  );
}

export default Home;
