import React, { Component } from 'react';
import './badgeNew.css'

import Badge from '../../components/Badge/Badge';
import Navbar from '../../components/Navbar/Navbar';
import BadgeForm from '../../components/BadgeForm/BadgeForm';

import nino_profile from '../../assets/nino_profile.jpg';
import nino from '../../assets/nino.jpg';

class BadgeNew extends Component {
  render() {
    return (
      <div className="badge-new-container">
        <Navbar/>
        <div className="BadgeNew__hero">
          <h1 className="title">Badge New</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Nino"
                lastName="Nakano"
                badgeImage={nino}
                avatarImage={nino_profile}
                mangaTitle="5Toubun no Hanayome"/>
            </div>
            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
