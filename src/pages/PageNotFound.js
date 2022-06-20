import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/css/PageNotFound.css';

const PageNotFound = () => {
  return(

    <div className="bodyNotFound">
      <img
        className="title"
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/031/435/original/49306444-1F68-4BC4-A543-09E043E10949.png?1649528823"
        alt="error 404"
        id="elements"
      />
      <img
        className="alpaca"
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/031/436/original/689AF8F5-23A8-40B0-B25D-1ED5577C5C85.png?1649528832"
        alt="llama espacial artesaner"
        id="elements"
      />
      <NavLink to="/" className="volver">
        ...Volver
      </NavLink>
    </div>
  )

   
}

export default PageNotFound;
