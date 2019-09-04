import React from 'react'
import './home.scss';

import HomeCard from '../../components/HomeCard/HomeCard';

import banner1 from '../../assets/images/banner_1.jpg';
import banner2 from '../../assets/images/banner_2.png';
import banner3 from '../../assets/images/banner_3.jpeg';


class Home extends React.Component {
  state = {
    data: [
      {
        id: '1',
        title: 'Go-Tōbun no Hanayome',
        author: 'Negi Haruba',
        season: 'Winter 2019',
        cover: 'https://vignette.wikia.nocookie.net/5toubun-no-hanayome/images/4/4d/Quintuplets_color_art_-_volume_6_release.jpg/revision/latest?cb=20190122040542'
      },
      {
        id: '2',
        title: 'Saenai Heroine no Sodatekata',
        author: 'Fumiaki Maruto',
        season: 'Winter 2015',
        cover: 'https://www.saenai.tv/images/top/top_vsl_main1.png'
      },
      {
        id: '3',
        title: 'SSSS.GRIDMAN',
        author: 'Studio Trigger',
        season: 'Winter 2018',
        cover: 'https://gridman.net/img/home/visual_07.jpg'
      }
    ]
  }
  render() {
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
            <HomeCard series={this.state.data}/>
          </div>
        </div>
        {/* Content ends */}
      </div>
    );
  }
}

export default Home