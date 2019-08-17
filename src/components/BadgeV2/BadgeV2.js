import React from 'react'
import './badgeV2.css'

class BadgeV2 extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return(
            <div className="badge">
              <li key={badge.id}>
                <p>{badge.firstName}</p>
              </li>
            </div>
          )
        })}
      </ul>
    )
  }
}

export default BadgeV2;
