import React from 'react'
import './badgeV2.scss'

class BadgeItem extends React.Component {
  render() {
    return(
      <div className="badgeItem">
        <img
          className="badgeItem__avatar"
          src={this.props.badge.avatarImage}
          alt={this.props.badge.firstName}/>
        <div>
          <h2>{this.props.badge.firstName} {this.props.badge.lastName}</h2>
          <div className="badgeItem__footer">
            #{this.props.badge.mangaTitle}
          </div>
        </div>
      </div>
    );
  }
}

class BadgeV2 extends React.Component {
  render() {
    return (
      <div className="badgeV2">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return(
              <li key={badge.id}>
                <BadgeItem badge={badge}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BadgeV2;
