import React, { Component } from 'react';

import logo_icon from '../../assets/logo_icon.png';

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo_icon} alt=""/>
        </a>
      </div>
    );
  }
}

export default BadgeNew;