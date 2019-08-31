import React from 'react'
import './home.scss';

import HomeCard from '../../components/HomeCard/HomeCard';


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
      <React.Fragment>
        <div className="container home-content">
          <div className="row">
            <HomeCard series={this.state.data}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home