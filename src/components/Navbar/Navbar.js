import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class BadgeNew extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand logo" to="/">NovelBadges</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-md-auto d-md-flex">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/badges">Lista</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/badges/new">Nuevo</Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default BadgeNew;