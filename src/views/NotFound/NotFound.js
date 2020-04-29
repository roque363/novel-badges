import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './notFound.scss';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function NotFound(props) {
  const handleBackdClick = () => {
    props.history.goBack();
  };

  return (
    <section className="notfound-section">
      <div className="inner">
        <div>
          <h1>Error 404</h1>
          <p>La página que buscas no parece existir.</p>
          <button
            type="button"
            className="btn btn-outline-light btn-lg"
            onClick={handleBackdClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Atras
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
