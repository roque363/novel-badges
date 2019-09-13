import React from 'react'
import { Link } from 'react-router-dom'
import './badgeList.scss'

import db from '../../data.json';

import BadgeHero from '../../components/BadgeHero/BadgeHero';
import Loader from '../../components/Loader/Loader';
import BadgeV2 from '../../components/BadgeV2/BadgeV2';

class BadgeList extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({ loading: true, error: null})

    try {
      const data = db
      this.setState({ loading: false, data: data})
    } catch (error) {
      this.setState({ loading: true, error: error})
    }
  }

  render() {
    if (this.state.loading === true) {
      return <Loader/>;
    }

    return (
      <React.Fragment>
        <BadgeHero title="New Waifu"/>
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
      </React.Fragment>
    );
  }
}

export default BadgeList;