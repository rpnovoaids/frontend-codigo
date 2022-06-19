import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import Nosotros from './components/Nosotros';
import Reviews from './components/Reviews';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Contactanos from './components/Contactanos';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<><Home/></>}/>
                    <Route path='/nosotros' element={<><Header/><Nosotros/></>}/>
                    <Route path='/reviews' element={<><Header/><Reviews/></>}/>
                    <Route path='/contactanos' element={<><Header/><Contactanos/></>}/>
                    <Route path="*" component={PageNotFound}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
