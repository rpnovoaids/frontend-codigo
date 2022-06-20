import '../styles/css/Contactanos.css';
const Contactanos = () => {
    return(
<>
    <section className="contactanos">
        <div className="contactanos-container">
            <div className="contactanos-container__mensaje-container">
                <h2 className="contactanos-container__mensaje">!Comunícate con Nosotros¡</h2>
            </div>
            <div className="contactanos-container__formulario">
                <figure className="contactanos-container__formulario-img-container">
                    <img className="contactanos-container__formulario-img" src="https://c.stocksy.com/a/esN500/z9/1283440.jpg"alt="Respondiendo Llamada" />
                </figure>
                
                <div className="contactanos-container__formulario-form" action="">
                    <label className="contactanos-container__formulario-form-titulo" htmlFor="">Envianos un mensaje</label>
                    <input className="contactanos-container__formulario-form-nombre" type="text" placeholder="Nombre"/>
                    <input className="contactanos-container__formulario-form-email" type="text" placeholder="Email" />
                    <textarea className="contactanos-container__formulario-form-mensaje" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button className="contactanos-container__formulario-form-boton">Enviar</button>
                </div>
            </div>
        </div>
    </section>
</>
    );
    

}

export default Contactanos;