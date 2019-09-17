import React from 'react'
import './loader.scss';

function Loader(){
  return (
    <React.Fragment>
      <div className="preloader">
        <h2>Cargando...</h2>
        <div className="loader"></div>
      </div>
    </React.Fragment>
  )
}

export default Loader
