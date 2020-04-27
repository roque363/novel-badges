import React, { useState, useEffect } from 'react'
import './home.scss';
import db from 'data.json';
// Components
import CardSerie from 'components/CardSerie';
// Images
import banner1 from 'assets/images/banner/the_quintessential_quintuplets_banner.jpg';
import banner2 from 'assets/images/banner/saekano_banner.png';
import banner3 from 'assets/images/banner/ssss_gridman_banner.jpeg';
// Icons
import ArrowNext from 'assets/icons/arrow-next.svg';
import ArrowPrev from 'assets/icons/arrow-prev.svg';

function Home() {
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(true)
  const [data, setData] = useState({
    series: []
  })

  useEffect(()=> {
    fetchData()
    return () => {
      setIsMounted(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async() => {
    if (isMounted) {
      setData(db)
    }
    setLoading(false)
  }

  return (
    <div className="home-main">
      <div className="home-main__hero">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100" alt="banner"/>
              <h1>The Quintessential Quintuplets</h1>
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
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundImage: `url(${ArrowPrev})` }}/>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundImage: `url(${ArrowNext})` }}/>
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
      <div className="container home-main__content">
        {!loading &&
          <div className="row">
            {data.series.map((serie, index) => {
              return (
                <div className="col-md-6 col-lg-4" key={index}>
                  <CardSerie
                    serie={serie}
                  />
                </div>
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default Home
