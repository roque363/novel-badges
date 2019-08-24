import React from 'react'
import './notFound.scss';

import notFound from '../../assets/error_404.png';

function NotFound() {
  return (
    <div className="NotFound__container">
      <img className="NotFound_img" src={notFound} alt="Error 404"></img>
    </div>
  );
}

export default NotFound