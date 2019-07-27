import React, { Component } from 'react';
import './navbar.css';

import logo_icon from '../../assets/logo_text.png';

class BadgeNew extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="navbar">
          <a href="/">
            <img src={logo_icon} alt=""/>
          </a>
        </div>
      </div>
    );
  }
}

export default BadgeNew;