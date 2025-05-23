import "./Home.css";
import Slide from "../../components/Slide/Slide";
import Navbar from "../../components/Navbar/Navbar.jsx";
import slideImage from '../../assets/slides/4.png';
import ProductList from "../../components/ProductList/ProductList.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { GroupBanner } from "../../components/Banner/Banner.jsx";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Slide img={slideImage}/>
      
      <ProductList />
      <GroupBanner />

      <Footer/>
    </div>
  );
}
