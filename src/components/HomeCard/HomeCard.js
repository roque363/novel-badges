import React from 'react'
import { Link } from 'react-router-dom';
import './homeCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

class HomeCard extends React.Component {
  render() {
    return (
      <article className="home-card">
        <div className="home-card__header">
          <FontAwesomeIcon className="home-card__header__like" icon={faHeart} style={{color:'rgb(189, 69, 69)'}}/>
          <div className="home-card__header__season">
            <FontAwesomeIcon icon={faCalendarTimes} style={{color:'rgb(189, 69, 69)'}}/>
            <span className="time">{this.props.serie.season}</span>
          </div>
        </div>
        <div className="home-card__img" style={{backgroundImage: `url(${this.props.serie.cover})`}}/>
        <Link to="#">
          <div className="home-card__img--hover" style={{backgroundImage: `url(${this.props.serie.cover})`}}/>
        </Link>
        <div className="home-card__info">
          <span className="badge badge-dark">Wiki</span>
          <h3 className="card-title">{this.props.serie.title}</h3>
          <span className="card-author">{this.props.serie.author}</span>
        </div>
      </article>
    );
  }
}

class Grid extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.series.map((serie) => {
          return(
            <div className="col-md-6 col-lg-4" key={serie.id}>
              <HomeCard serie={serie}/>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}

export default Grid;
