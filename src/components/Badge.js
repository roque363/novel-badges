import React from 'react';
import './Badge.css'

import logo from '../assets/wafle_1.jpg';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="Logo de la Web"></img>
        <h1>Roque <br/> Alarcon</h1>
      </div>
    );
  }
}

export default Badge;