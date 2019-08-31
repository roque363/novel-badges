import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './notFound.scss';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class NotFound extends React.Component {
  handleBackdClick = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <React.Fragment>
        <section className="notfound-section">
          <div className="inner">
            <div>
              <h1>Error 404</h1>
              <p>La página que buscas no parece existir.</p>
              <button 
                type="button"
                className="btn btn-outline-light btn-lg"
                onClick={this.handleBackdClick}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Atras
              </button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default NotFound