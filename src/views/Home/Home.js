import React from 'react'
import './home.scss';
import db from '../../data.json';

import HomeCard from '../../components/HomeCard/HomeCard';

import banner1 from '../../assets/images/banner_1.jpg';
import banner2 from '../../assets/images/banner_2.png';
import banner3 from '../../assets/images/banner_3.jpeg';

class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      data: {
        results: []
      }
    }
  }

  componentDidMount() {
    console.log('3. componentDidMount()');
    this.timeoutId = setTimeout(() => {
      this.setState({
        data: db
      });
    }, 500);
  }

  componentDidUpdate(prevProps, preState) {
    console.log('5. componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount()');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2/4. render()');
    return (
      <div className="home-main">
        {/* Hero start */}
        <div className="hero">
          {/* Content before waves*/}
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={banner1} className="d-block w-100" alt="banner"/>
                <h1>Go-Tōbun no Hanayome</h1>
              </div>
              <div className="carousel-item">
                <img src={banner2} className="d-block w-100" alt="banner"/>
                <h1>Saenai Heroine no Sodatekata</h1>
              </div>
              <div className="carousel-item">
                <img src={banner3} className="d-block w-100" alt="banner"/>
                <h1>SSSS. GRIDMAN</h1>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* Waves Container */}
          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(28, 35, 49,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(28, 35, 49,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(28, 35, 49,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(244, 244, 247)" />
              </g>
            </svg>
          </div>
          {/* Waves end */}
        </div>
        {/* Hero ends */}

        {/* Content starts */}
        <div className="container home-content">
          <div className="row">
            <HomeCard series={this.state.data.results}/>
          </div>
        </div>
        {/* Content ends */}
      </div>
    );
  }
}

export default Home