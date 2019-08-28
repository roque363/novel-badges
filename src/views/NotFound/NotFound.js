import React from 'react'
import './notFound.scss';

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
                className="btn btn-outline-light btn-lg btn-block"
                onClick={this.handleBackdClick}>
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