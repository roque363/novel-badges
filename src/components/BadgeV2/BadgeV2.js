import React from 'react'
import './badgeV2.scss'

class BadgeItem extends React.Component {
  render() {
    return(
      <div className="badgeItem">
        <img
          className="badgeItem__avatar"
          src={this.props.badge.avatarImage || "https://66.media.tumblr.com/bce6f07582df80a47c2adce923642744/tumblr_pl7iqav9lZ1u2xpn7o1_500.jpg"}
          alt={this.props.badge.firstName || "Nino"}/>
        <div>
          <h2>{this.props.badge.firstName || "Nino"} {this.props.badge.lastName || "Nakano"}</h2>
          <div className="badgeItem__footer">
            #{this.props.badge.mangaTitle || "5Toubun no Hanayome"}
          </div>
        </div>
      </div>
    );
  }
}

class List extends React.Component {
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

export default List;
