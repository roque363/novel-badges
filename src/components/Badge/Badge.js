import React from 'react';
import './Badge.css'

class Badge extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      avatarImage,
      badgeImage,
      mangaTitle
    } = this.props
    return (
      <div className="badge">
        <div className="badge_header">
          <img className="logo" src={badgeImage} alt="Badge"/>
        </div>
        <div className="badge_section-name">
          <img className="badge_avatar" src={avatarImage} alt={firstName}/>
          <h2>{firstName}<br/>{lastName}</h2>
        </div>
        <div className="badge_section-info">
          <div className="info-group">
            <h3 className="info-secondary-font">Japanese</h3>
            <div className="badge-font">
              <span lang="ja">
                <ruby>
                  <rb>中</rb>
                  <rt>なか</rt>
                </ruby>
                <ruby>
                  <rb>野</rb>
                  <rp>(</rp>
                  <rt>の</rt>
                  <rp>)</rp>
                </ruby>
                <ruby><rb>二</rb><rp>(</rp><rt>に</rt><rp>)</rp></ruby>
                <ruby><rb>乃</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>
              </span>
            </div>
          </div>
          <div className="info-group">
            <h3 className="info-secondary-font">Rōmaji</h3>
            <div className="badge-font">
              {firstName} {lastName}
            </div>
          </div>
        </div>
        <div className="badge_footer">
          #{mangaTitle}
        </div>
      </div>
    );
  }
}

export default Badge;
