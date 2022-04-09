import Line from '../assets/img/Line.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faBars, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import '../styles/css/Header.css';
const Header = () => {
    return (
        <>
            <div className="top-bar">
                <p className="top-bar__text">Delivery gratis desde S/. 100</p>
            </div>
            <div className="header-container">
                <div className="header-main">
                    <div className="header-main__logo">
                        <a href="#" className="header-main__link-logo-container">
                            <img src="./img/brand.svg" alt="Brand" className="header-main__link-logo"/>
                        </a>
                    </div>
                    <div className="header-main__search">
                        <form className="header-main__search-form" action="#">
                            <input className="header__search-input" type="text" placeholder="¿Qué estas buscando?"/>
                                <button className="header__search-button" type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                        </form>
                    </div>
                    <div className="header-main__card">
                        <ul className="header-main__link-list">
                            <li className="header-main__link-item">
                                <a href="#" className="header-main__link"><i className="far fa-heart"></i></a>
                            </li>
                            <li className="header-main__link-item">
                                <a href="#" className="header-main__link"><i className="fas fa-toggle-off"></i></a>
                            </li>
                            <li className="header-main__link-item">
                                <a href="#" className="header-main__link"><i className="fas fa-shopping-cart"></i></a>
                            </li>
                        </ul>
                        <ul className="header-main__link-list link-user">
                            <li className="header-main__link-item">
                                <a href="#" className="header-main__link"><i className="fas fa-user-circle"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-navbar">
                    <div className="header-navbar__category">
                        <label htmlFor="category" className="header-category__icon">
                            <FontAwesomeIcon icon={faBars} />
                            <span className="header-category__title">Categorias</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </label>
                        <input type="checkbox" name="category" id="category" className="header-category__checkbox"
                               checked/>
                        <ul className="header-category__link-list">
                            <li className="header-category__link-item">
                                <a href="#" className="header-category__link"><i
                                    className="fas fa-angle-right"></i> Fruits & Vegetables</a>
                            </li>
                            <li className="header-category__link-item">
                                <a href="#" className="header-category__link"><i
                                    className="fas fa-angle-right"></i> Meats & Seafood</a>
                            </li>
                            <li className="header-category__link-item">
                                <a href="#" className="header-category__link"><i
                                    className="fas fa-angle-right"></i> Breakfast & Dairy</a>
                            </li>
                            <li className="header-category__link-item">
                                <a href="#" className="header-category__link"><i
                                    className="fas fa-angle-right"></i> Beverages</a>
                            </li>
                            <li className="header-category__link-item">
                                <a href="#" className="header-category__link"><i
                                    className="fas fa-angle-right"></i> Breads & Bakery</a>
                            </li>
                            <li className="header-category__link-item">
                                <a href="#" className="header-category__link"><i
                                    className="fas fa-angle-right"></i> Frozen Foods</a>
                            </li>
                            <li className="header-category__link-item">
                                <a href="#" className="header-category__link">
                                    <i className="fas fa-angle-right"></i> Biscuits & Snacks</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-navbar__nav">
                        <nav className="header-nav" id="header-nav">
                            <div className="header-nav__container">
                                <label htmlFor="nav" className="header-nav__nav-icon">
                                    <FontAwesomeIcon icon={faBars} />
                                </label>
                                <input type="checkbox" name="nav" id="nav" className="header-nav__nav-checkbox"/>
                                <ul className="header-nav__link-list">
                                    <li className="header-nav__link-item">
                                        <a href="#" className="header-nav__link">Nosotros</a>
                                    </li>
                                    <li className="header-nav__link-item">
                                        <a href="#" className="header-nav__link">Productos</a>
                                    </li>
                                    <li className="header-nav__link-item">
                                        <a href="#" className="header-nav__link">Reviews</a>
                                    </li>
                                    <li className="header-nav__link-item">
                                        <a href="#" className="header-nav__link">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="header-navbar__offer"></div>
                </div>
            </div>
        </>
    );
}

export default Header;
