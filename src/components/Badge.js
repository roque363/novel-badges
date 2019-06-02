import React from 'react';
import './Badge.css'

import nino_profile from '../assets/nino_profile.jpg';
import nino from '../assets/nino.jpg';

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img className="logo" src={nino} alt="Badge"/>
        </div>
        <div className="badge_section-name">
          <img className="badge_avatar" src={nino_profile} alt="Badge"/>
          <h2>Nino <br/> Nakano</h2>
        </div>
        <div className="badge_section-info">
          <div className="info-group">
            <h3 class="info-secondary-font">Japanese</h3>
            <div class="badge-font">
              <span lang="ja">
                <ruby><rb>中</rb><rp>(</rp><rt>なか</rt><rp>)</rp></ruby>
                <ruby><rb>野</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>
                <ruby><rb>二</rb><rp>(</rp><rt>に</rt><rp>)</rp></ruby>
                <ruby><rb>乃</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>
              </span>
            </div>
          </div>
          <div className="info-group">
            <h3 class="info-secondary-font">Rōmaji</h3>
            <div class="badge-font">
              Nino Nakano
            </div>
          </div>
        </div>
        <div className="badge_footer">
          #5Toubun no Hanayome
        </div>
      </div>
    );
  }
}

export default Badge;
