import {NavLink} from 'react-router-dom';
import '../styles/css/Login.css';
const Login = () => {
    return(
        <>
        <section className='login'>
            <div className='login-container'>
                <div className='form'>
                <label htmlFor="" className='login-container__title'>Bienvenido</label>
                <input type="text" className='login-container__user' placeholder='Usuario'/>
                <input type="text" className='login-container__password' placeholder='Contraseña'/>
                <button className='login-container__button'>Ingresar</button>
                <NavLink to="/" className='login-container__message'>¿No tienes cuenta? Registrate</NavLink>
                </div>
                <NavLink to="/" className="login-container__back">Volver</NavLink>

            </div>
            

        </section>
        </>
    )
};
export default Login;