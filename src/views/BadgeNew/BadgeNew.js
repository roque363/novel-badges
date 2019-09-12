import React, { Component } from 'react';
import './badgeNew.css'

import Badge from '../../components/Badge/Badge';
import BadgeHero from '../../components/BadgeHero/BadgeHero';
import BadgeForm from '../../components/BadgeForm/BadgeForm';

import nino_profile from '../../assets/nino_profile.jpg';
import nino from '../../assets/nino.jpg';

class BadgeNew extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      mangaTitle: '',
      badgeImage: '',
      avatarImage: ''
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <BadgeHero title="New Waifu"/>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                badgeImage={this.state.form.badgeImage}
                avatarImage={this.state.form.avatarImage}
                mangaTitle={this.state.form.mangaTitle}/>
              <Badge
                firstName="Nino"
                lastName="Nakano"
                badgeImage={nino}
                avatarImage={nino_profile}
                mangaTitle="5Toubun no Hanayome"/>
            </div>
            <div className="col-6">
              <BadgeForm 
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
