import Line from '../assets/img/Line.svg';
import '../styles/css/Nosotros.css';
const Nosotros = () => {
    return ( 
    <>
<section className='nosotros'>
    <div className='nosotros-container'>
        <h1 className='nosotros-title'>Nosotros</h1>
        <p className='nosotros-about'>A través del portal Artesaner se busca brindar un espacio de encuentro entre artesanas y artesanos de Perú, representantes del mundo del diseño, moda y cultura, para fortalecer y promocionar la artesanía textil.
        Artesaner es un portal especializado que responde a la demanda de artesanía textil, sector con gran potencial que involucra a más de 3 millones de familias rurales y periurbanas en situación de pobreza en Perú.
        Las secciones del portal incluyen ropa, accesorios, reviews, contactos, directorio de artesanos, diseñadores, tienda virtual.</p>
        <h2 className='nosotros-subtitle'>Nuestra Historia</h2>
        <p className='nosotros-about'>El portal nace a partir del trabajo realizado por los estudiantes del Bootcamp Desarrollo Web Full Stack, una iniciativa de CodiGo y esHoy </p>
        
        <section className="staff">
            <div className="staff__container-title">
                <h2 className='nosotros-subtitle'>Nuestro Equipo</h2>
            </div>
            <div className="staff__all">

            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" src="https://i.postimg.cc/2yvPzhxf/Whats-App-Image-2022-03-30-at-12-36-37-PM.jpg" alt="Writhney Lazo"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Writhney Lazo</h3>
                        <div className='staff__info-line-container'><img className='staff__info-line' src={Line}></img></div>
                        <p className="staff-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article staff__article--mod">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" width="70px" src="https://i.pinimg.com/originals/06/86/7b/06867b5651569ee604ad62bc7120649f.jpg" alt="Febe Chacon"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Febe Chacon</h3>
                        <div className='staff__info-line-container'><img className='staff__info-line' src={Line}></img></div>
                        
                        <p className="staff-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" src="https://i.pinimg.com/originals/06/86/7b/06867b5651569ee604ad62bc7120649f.jpg" alt="Moises Arrieta"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Moises Arrieta</h3>
                        <div className='staff__info-line-container'><img className='staff__info-line' src={Line}></img></div>
                        <p className="staff-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article staff__article--mod">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" width="70px" src="https://avatars.githubusercontent.com/u/64298891?v=4" alt="Robert Quilca"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Robert Quilca</h3>
                        <div className='staff__info-line-container'><img className='staff__info-line' src={Line}></img></div>
                        
                        <p className="staff-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" width="70px" src="https://i.pinimg.com/originals/06/86/7b/06867b5651569ee604ad62bc7120649f.jpg" alt="Rody Ccoyllo"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Rody Ccoyllo</h3>
                        <div className='staff__info-line-container'><img className='staff__info-line' src={Line}></img></div>
                        
                        <p className="staff-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article staff__article--mod">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" src="https://media-exp1.licdn.com/dms/image/C4D03AQGIukU6tM56gQ/profile-displayphoto-shrink_800_800/0/1641773283959?e=1654128000&v=beta&t=Blh6SbZycyhKP6ciEvuFeMurQx2cB50QhKKOzwCPn1w" alt="Victoria Lavarello"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Victoria Lavarello</h3>
                        <div className='staff__info-line-container'><img className='staff__info-line' src={Line}></img></div>
                        <p className="staff-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
            <article className="staff__article">
                <div className="staff__container">
                    <figure className="staff__img-container">
                        <img className="staff__img" width="70px" src="https://i.pinimg.com/originals/06/86/7b/06867b5651569ee604ad62bc7120649f.jpg" alt="Ruben Puerta"/>
                    </figure>
                    <figcaption className="staff__info-container">
                        <h3 className="staff__info-title">Ruben Puerta</h3>
                        <div className='staff__info-line-container'><img className='staff__info-line' src={Line}></img></div>
                        
                        <p className="staff-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    </figcaption>
                </div>
                <h4 className='staff__article-description'>Developer</h4>
            </article>
    
            </div>
        </section>
    
    
    </div>
</section>
    </>
     );
}
 
export default Nosotros;