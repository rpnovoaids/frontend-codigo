import react from "react";

import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Main = () => {
   return ( 
      <div>
         <Slider />
         <Categories />
         <Products /> 
         <Newsletter />
    </div>
    );
}
 
export default Main;