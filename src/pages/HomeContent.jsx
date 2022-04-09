import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Marcas from "../components/MarcasyEmpresasdeEnvio";
import Newsletter from "../components/Newsletter";


const HomeContent = () => {
  return (
    <>
      <Slider/>
      <Categories />
      <Products />
      <Marcas />
      <Newsletter />

    </>
  );
};

export default HomeContent;
