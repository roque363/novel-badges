import React from 'react';
import './Badge.css'

import logo from '../assets/wafle_1.jpg';
import nino from '../assets/nino.jpg';

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img className="logo" src={nino} alt="Badge"/>
        </div>
        <div className="badge_section-name">
          <img className="badge_avatar" src={logo} alt="Badge"/>
          <h2>Roque <br/> Alarcon</h2>
        </div>
        <div className="badge_section-info">
          <p>@roque363</p>
        </div>
        <div className="badge_footer">
        </div>
      </div>
    );
  }
}

export default Badge;