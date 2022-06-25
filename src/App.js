import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import Nosotros from './components/Nosotros';
import Reviews from './components/Reviews';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Contactanos from './components/Contactanos';
import Products from './components/Products';
import FooterContainer from './components/FooterContainer';
import Login from './pages/Login';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/nosotros' element={<><Header/><Nosotros/><FooterContainer/></>}/>
                    <Route path='/reviews' element={<><Header/><Reviews/></>}/>
                    <Route path='/contactanos' element={<><Header/><Contactanos/></>}/>
                    <Route path='/productos' element={<><Header/><Products/></>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                    
                </Routes>
            </Router>
        </>
    );
}

/*<Route path="/*" component={PageNotFound}/>*/
export default App;
