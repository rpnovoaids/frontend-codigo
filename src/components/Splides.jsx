import SliderOne from '../assets/img/slider/slider-banner-1.webp';
import SliderTwo from '../assets/img/slider/slider-banner-2.webp';
import SliderThree from '../assets/img/slider/slider-banner-3.webp';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '../styles/css/Slider.css';
import '@splidejs/react-splide/css';

const Splides = () => {
    return ( <>
    <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <img src={SliderOne} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={SliderTwo} alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={SliderThree} alt="Image 2"/>
                </SplideSlide>
    </Splide>
    </> );
}
 
export default Splides;