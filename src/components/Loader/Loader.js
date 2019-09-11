import React, { Component } from 'react'
import './loader.scss';

export class Loader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="preloader">
          <h2>Cargando...</h2>
          <div className="loader"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Loader
