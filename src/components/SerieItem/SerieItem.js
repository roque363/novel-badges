import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './serieItem.scss'
// Constanst
import * as VARIABLES from 'constants/variables'
// Constans
import * as ROUTES from 'constants/routes'
// Utils
import replacePathParams from 'utils/replacePathParams'

const SerieItem = props => {
  const { serie } = props
  return(
    <Link to={replacePathParams(ROUTES.BADGES_DETAIL, { slug: serie.slug })} className="link-unstyled">
      <div className="badgeItem">
        <div className="badgeItem__avatar">
          <img
            src={VARIABLES.URL_IMAGE + serie.cover}
            alt={serie.title}
          />
        </div>
        <div>
          <h4>{serie.title}</h4>
          <span className="badgeItem__author">
            {serie.story_author}
          </span>
        </div>
      </div>
    </Link>
  )
}

SerieItem.propTypes = {
  serie: PropTypes.object.isRequired
}

export default SerieItem;
