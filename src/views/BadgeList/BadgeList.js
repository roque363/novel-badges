import React from 'react'
import { Link} from 'react-router-dom'
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
        avatarImage: 'https://66.media.tumblr.com/bce6f07582df80a47c2adce923642744/tumblr_pl7iqav9lZ1u2xpn7o1_500.jpg',
        badgeImage: ''
      },
      {
        id: '2',
        firstName: 'Miku',
        lastName: 'Nakano',
        mangaTitle: '5Toubun no Hanayome',
        avatarImage: 'https://pa1.narvii.com/7129/988461aa59487d4d3343e59642f838f0787dbb6cr1-600-338_hq.gif',
        badgeImage: ''
      },
      {
        id: '3',
        firstName: 'Eriri',
        lastName: 'Spencer Sawamura',
        mangaTitle: 'Saenai Heroine no Sodatekata ',
        avatarImage: 'https://pm1.narvii.com/6983/d8fcb602077a23c009b66ef0cb946051b4347e50r1-721-720v2_hq.jpg',
        badgeImage: ''
      },
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
            <Link to="/badges/new" className="btn btn-primary">
              Nuevo Badge
            </Link>
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