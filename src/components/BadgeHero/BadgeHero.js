import React from 'react'
import './badgeHero.scss'

class BadgeHero extends React.Component {
  render() {
    const { title } = this.props
    return (
      <React.Fragment>
        {/* Header starts */}
        <div className="Badges__hero">
          <div className="Badges__container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
        {/* Header ends */}
      </React.Fragment>
    );
  }
}

export default BadgeHero;