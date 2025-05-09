import './Home.css'
import Slide from '../../components/Slide/Slide';
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function Home(){
    return(
        <div className="home">
        <Navbar />
        <Slide />
        <hr></hr>
        <Slide />
        <hr></hr>
        <Slide />
        </div>
    );

}