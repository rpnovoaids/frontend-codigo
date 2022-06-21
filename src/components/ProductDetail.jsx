import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart,faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import '../styles/css/ProductDetail.css';
import ellipse5 from '../assets/producto/ellipse5.png';
import ellipse6 from '../assets/producto/ellipse6.png';
import ellipse7 from '../assets/producto/ellipse7.png';
import Slider_Product from '../assets/producto/Slider_Product.png';
import user from '../assets/producto/user.jpg';
import Vector from '../assets/producto/Vector.png';

const ProductDetail = () => {
    return (
        <section className="reviews">

            <div className="product-detail-container">
        
            <header className="header">
                <nav className="header__nav">
                    <div className="header__nav-slogan-container">
                        <figure className="header__nav-slogan-back-container">
                            <img className="header__nav-slogan-back-icon" src={Vector} alt="icono de volver al menu principal"/>
                        </figure>
                        <h1 className="header__nav-slogan">ARTESANER</h1>
                    </div>
                    <div className="header__nav_cart-link-container">
                        
                    <a className="header__nav_cart-link" href="#">  <FontAwesomeIcon icon={faShoppingCart}/></a>
                            
                    </div>
                </nav>
            </header>
            <section className="products">
                <article className="products-container">
                    <div className="product">
                        <h2 className="product__title">YSUMI CARDIGAN</h2>
                        <figure className="product__product-image-container">
                            <img className="product__product-image" src={Slider_Product} alt="imagen detalle producto"/>
                        </figure>
                    </div>
                    <div className="product-detail">
                        <div className="product-detail__colors">
                            <h3 className="product-detail__colors-title">COLORES DISPONIBLES</h3>
                            <div className="product-detail__colors-container">
                                <img className="product-detail__colors-color" src={ellipse5} alt=""/>
                                <img className="product-detail__colors-color" src={ellipse6} alt=""/>
                                <img className="product-detail__colors-color" src={ellipse7} alt=""/>
                            </div>
                        </div>
                        <div className="product-detail__sizes">
                            <h3 className="product-detail__sizes-title">TALLAS</h3>
                            <div className="product-detail__sizes-size-container">
                                <h3 className="product-detail__sizes-size">S</h3>
                                <h3 className="product-detail__sizes-size">M</h3>
                                <h3 className="product-detail__sizes-size">L</h3>

                            </div>
                        </div>
                        <h2 className="product-detail__price">S/.69.90</h2>
                        <button className="product-detail__add-button">AÑADIR</button>
                    </div>
                </article>
        
            <section className="more-details">
                <div className="more-details-container">
                    <div className="more-detail__description-container">
                        <h3 className="more-detail__description__title">DESCRIPCION</h3>
                        <p className="more-detail__description__description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima officia, reiciendis. 
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima officia, reiciendis. 
                            

                        </p>
                    </div>
                    <div className="more-details__comments-container">
                        <h3 className="more-details__comments__title">COMENTARIOS</h3>
                    

                        <div className="container">
                            <div className="card">
                                <div className="card-text-wrapper">
                                     <FontAwesomeIcon icon={faQuoteRight}/>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
                                        ratione magni, illum voluptas?
                                    </p>
                                </div>
                        
                            </div>
                            <figure>
                                <div className="card__user-pic">
                                    <img src={user} alt="usuario"/>
                                </div>
                                <h1>
                                    <span className="card__name">Clara</span>
                                    <span className="card_role">Cliente estrella</span>
                                </h1>
                            </figure>
                    
                        </div>
                        <div className="container">
                            <div className="card">
                                <div className="card-text-wrapper">
                                     <FontAwesomeIcon icon={faQuoteRight}/>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
                                        ratione magni, illum voluptas?
                                    </p>
                                </div>
                        
                            </div>
                            <figure>
                                <div className="card__user-pic">
                                    <img src={user} alt="usuario"/>
                                </div>
                                <h1>
                                    <span className="card__name">Clara</span>
                                    <span className="card_role">Cliente estrella</span>
                                </h1>
                            </figure>
                    
                        </div>
                    </div>
                    
                </div>
            </section>
            </section>
    </div>
        </section>
    );
}

export default ProductDetail;
