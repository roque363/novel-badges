import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
// Constans
import * as ROUTES from 'constants/routes'

const Item = ({path, text}) => (
  <li className="nav-item">
    <Link className="nav-link" to={path}>{text}</Link>
  </li>
)

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand logo" to={ROUTES.HOME}>NovelBadges</Link>
        <button 
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ml-md-auto d-md-flex">
            <Item path={ROUTES.HOME} text="Inicio"/>
            <Item path={ROUTES.SEARCH} text="Buscar"/>
            <Item path={ROUTES.BADGES} text="Lista"/>
            <Item path={ROUTES.RICKANDMORTY} text="Rick y Morty"/>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
