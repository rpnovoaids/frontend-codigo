import { NavLink } from "react-router-dom";

const SignUp = ()=>{
    return(<>
        <section className='login'>
            <div className='login-container'>
                <div className='form'>
                <label htmlFor="" className='login-container__title'>Registrate</label>
                <input type="text" className='login-container__user' placeholder='Nombres'/>
                <input type="text" className='login-container__user' placeholder='Apellidos'/>
                <input type="text" className='login-container__user' placeholder='Correo'/>
                <input type="number" className='login-container__user' placeholder='Telefono'/>
                <input type="password" className='login-container__user' placeholder='Contraseña'/>
                <button className='login-container__button'>Registrar</button>
                </div>
                <NavLink to="/login" className="login-container__back">Volver</NavLink>

            </div>
        </section>
    </>)
}
export default SignUp;