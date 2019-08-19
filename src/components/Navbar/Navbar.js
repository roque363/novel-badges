import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class BadgeNew extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="navbar">
          <Link className="logo" to="/">NovelBadges</Link>
        </div>
      </div>
    );
  }
}

export default BadgeNew;