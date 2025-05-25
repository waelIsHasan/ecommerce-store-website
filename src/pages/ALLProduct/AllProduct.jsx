import CategoryFilter from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function AllProduct(){
   
    const categories = ["clothes" , "fwe" , 'shoes'];
    return(
        <div>
            <Navbar/>
        <div className="all-product-page">
            
        <CategoryFilter
                categories={categories}
              
                />

        </div>
        <Footer/>
        </div>
    )

}