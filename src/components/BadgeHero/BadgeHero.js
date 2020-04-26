import React from 'react'
import PropTypes from 'prop-types'
import './badgeHero.scss'

const BadgeHero = props => {
  const { title } = props
  return (
    <div className="badge-hero">
      <div className="badge-hero__container">
        <h1 className="badge-hero__title">{title}</h1>
      </div>
    </div>
  )
}

// Especifica los valores por defecto de props:
BadgeHero.defaultProps = {
  title:""
};

BadgeHero.propTypes = {
  title: PropTypes.string,
}

export default BadgeHero