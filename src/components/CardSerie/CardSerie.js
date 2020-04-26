import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './cardSerie.scss'
// Constanst
import * as VARIABLES from 'constants/variables'
// Constans
import * as ROUTES from 'constants/routes'
// Utils
import replacePathParams from 'utils/replacePathParams'
// Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const CardSerie = props => {
  const { serie } = props
  return (
    <article className="card-serie">
      {/* Header Oculto */}
      <div className="card-serie__header">
        <FontAwesomeIcon className="card-serie__header__like" icon={faHeart} style={{color:'rgb(189, 69, 69)'}}/>
        <div className="card-serie__header__season">
          <FontAwesomeIcon icon={faCalendarTimes} style={{color:'rgb(189, 69, 69)'}}/>
          <span className="time">{serie.season}</span>
        </div>
      </div>
      {/* Header Image */}
      <div 
        className="card-serie__img"
        style={{backgroundImage: `url(${VARIABLES.URL_IMAGE}${serie.cover})`}}
      />
      <Link to={replacePathParams(ROUTES.BADGES_DETAIL, { id: serie.id })}>
        <div
          className="card-serie__img--hover"
          style={{backgroundImage: `url(${VARIABLES.URL_IMAGE}${serie.cover})`}}
        />
      </Link>
      {/* Header Content */}
      <div className="card-serie__info">
        <span className="badge badge-dark">Wiki</span>
        <h3 className="card-title">{serie.title}</h3>
        <span className="card-author">{serie.author}</span>
      </div>
    </article>
  )
}

CardSerie.defaultProps = {
  serie: {
    id: "1",
    title: "The Quintessential Quintuplets",
    author: "Negi Haruba",
    season: "Winter 2019",
    cover: "the_quintessential_quintuplets.jpg",
  }
};

CardSerie.propTypes = {
  serie: PropTypes.object.isRequired,
}

export default CardSerie;
