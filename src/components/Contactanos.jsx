const Contactanos = () => {
    return(
<>
    <section className="contactanos">
        <div className="contactanos-container">
            <div className="contactanos-container__mensaje-container">
                <h2 className="contactanos-container__mensaje">! Comunícate con Nosotros ¡</h2>
            </div>
            <div className="contactanos-container__formulario">
                <figure className="contactos-container__formulario-img-container">
                    <img className="contactanos-container__formulario-img" src="" alt="" />
                </figure>
                <form className="contactos-container__formulario-form" action="">
                    <label className="contactos-container__formulario-form-titulo" htmlFor="">Envianos un mensaje</label>
                    <input className="contactos-container__formulario-form-nombre" type="text" placeholder="Nombre"/>
                    <input className="contactos-container__formulario-form-email" type="text" placeholder="Email" />
                    <textarea className="contactos-container__formulario-form-mensaje" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button className="contactos-container__formulario-form-boton">Enviar</button>
                </form>
            </div>
        </div>
    </section>
</>
    );
    

}

export default Contactanos;