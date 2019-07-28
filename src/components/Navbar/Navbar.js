import React, { Component } from 'react';
import './navbar.css';

class BadgeNew extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="navbar">
          <a className="logo" href="/">NovelBadges</a>
        </div>
      </div>
    );
  }
}

export default BadgeNew;