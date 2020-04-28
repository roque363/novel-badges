import React, { Component } from 'react';
import './badgeNew.scss'

import Badge from 'components/Badge';
import BadgeHero from 'components/BadgeHero';
import BadgeForm from 'components/BadgeForm';

import nino_profile from 'assets/nino_profile.jpg';
import nino from 'assets/nino.jpg';

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      this.setState({ loading: false});
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error});
    }
  }

  render() {
    return (
      <React.Fragment>
        <BadgeHero title="New Waifu"/>
        <div className="container badgeNew-main">
          <div className="row">
            <div className="col-md-6">
              <Badge
                firstName={this.state.form.firstName || "Nino" }
                lastName={this.state.form.lastName || "Nakano"}
                badgeImage={this.state.form.badgeImage || nino}
                avatarImage={this.state.form.avatarImage || nino_profile}
                mangaTitle={this.state.form.mangaTitle || "5Toubun no Hanayome"}
              />
            </div>
            <div className="col-md-6">
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
