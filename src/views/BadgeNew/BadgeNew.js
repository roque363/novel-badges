import React, { Component } from 'react';

import Badge from '../../components/Badge/Badge';
import Navbar from '../../components/Navbar/Navbar';

import nino_profile from '../../assets/nino_profile.jpg';
import nino from '../../assets/nino.jpg';

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Badge New</h1>
        <Badge
          firstName="Nino"
          lastName="Nakano"
          badgeImage={nino}
          avatarImage={nino_profile}
          mangaTitle="5Toubun no Hanayome"
        />
      </div>
    );
  }
}

export default BadgeNew;