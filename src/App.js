import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Header from "./components/Header";
import Nosotros from './components/Nosotros';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Router>
                <Routes>
                <Route  path='/' element={<><Home/></>}/>
                <Route  path='/nosotros' element={<><Header/><Nosotros/></>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
