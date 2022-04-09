import react from "react";

import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Main = () => {
   return ( 
      <div>
         <Categories />
         <Products /> 
         <Newsletter />
    </div>
    );
}
 
export default Main;