import React from 'react'
import './badgeList.css'

import BadgeV2 from '../../components/BadgeV2/BadgeV2';

class BadgeList extends React.Component {
  state = {
    data: [
      {
        id: '1',
        firstName: 'Nino',
        lastName: 'Nakano',
        mangaTitle: '5Toubun no Hanayome',
        avatarImage: '',
        badgeImage: ''
      },
      {
        id: '',
        firstName: 'Miku',
        lastName: 'Nakano',
        mangaTitle: '5Toubun no Hanayome',
        avatarImage: '',
        badgeImage: ''
      }
    ]
  }
  render() {
    return (
      <div>
        <div className="Badges__hero">
          <div className="Badges__container">
            <h1 className="title">New Waifu</h1>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary">Nuevo Badge</a>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeV2 badges={this.state.data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeList;