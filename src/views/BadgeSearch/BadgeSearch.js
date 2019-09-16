import React, { Component } from 'react'
import './badgeSearch.scss'
import { Link } from 'react-router-dom';

import BadgeHero from '../../components/BadgeHero/BadgeHero';
import Loader from '../../components/Loader/Loader';

function Genero(props) {
  const { genres } = props

  if (genres === 'Comedy') {
    return( <div style={{background: '#EEA800'}}>{genres}</div> );
  } else if (genres === 'Romance') {
    return( <div style={{background: '#FD337F'}}>{genres}</div> );
  } else if (genres === 'Romance') {
    return( <div style={{background: '#8855DD'}}>{genres}</div> );
  } else if (genres === 'Action') {
    return( <div style={{background: '#006AFA'}}>{genres}</div> );
  } else if (genres === 'Slice of Life') {
    return( <div style={{background: '#9AB710'}}>{genres}</div> );
  } else if (genres === 'Drama') {
    return( <div style={{background: '#00B19A'}}>{genres}</div> );
  } else if (genres === 'Sci-Fi') {
    return( <div style={{background: '#4A20E2'}}>{genres}</div> );
  } else if (genres === 'Ecchi') {
    return( <div style={{background: '#C00355'}}>{genres}</div> );
  } else if (genres === 'Fantasy') {
    return( <div style={{background: '#A864B7'}}>{genres}</div> );
  } else {
    return( <div style={{background: '#8855DD'}}>{genres}</div> );
  }

}

class SearchCard extends React.Component {
  render() {
    const { media } = this.props;
    return(
      <React.Fragment>
        <article className="search-card">
          {/* Header */}
          <div className="search-card__header">
            <span className="badge badge-dark">{media.type}</span>
            <div className="search-card__header__year">
              <span className="time">{media.startDate.year}</span>
            </div>
          </div>
          {/* Image */}
          <div className="search-card__img" style={{backgroundImage: `url(${media.coverImage.extraLarge})`}}/>
          <a href={media.siteUrl}>
            <div className="search-card__img--hover" style={{backgroundImage: `url(${media.coverImage.extraLarge})`}}/>
          </a>
          {/* Content */}
          <div className="search-card__info">
            <h3 className="card-title">{media.title.romaji}</h3>
            <div className="card-genero">
              {media.genres.map(genres => (
                <div className="genero" key={genres}>
                  <Genero genres={genres}/>
                </div>
              ))}
            </div>
          </div>
        </article>
      </React.Fragment>
    )
  }
}

class BadgeSearch extends Component {
  state = {
    loading: false,
    error: null,
    searchName: 'Love is War',
    data: {
      data: {
        Page: {
          pageInfo: {
            total: '',
            currentPage: '',
            lastPage: '',
            hasNextPage: false,
            perPage: ''
          },
          media: []
        }
      }
    }
  };
  _isMounted = true;

  componentDidMount() {
    this._isMounted = true;
    this.fetchData()
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchData = async() => {
    this.setState({ loading: true, error: null})

    var query = `
      query ($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (id: $id, search: $search) {
            id
            title {
              romaji
              native
            }
            type
            season
            startDate {
              year
            }
            endDate {
              year
            }
            episodes
            chapters
            volumes
            genres
            siteUrl
            coverImage {
              extraLarge
            }
          }
        }
      }
    `;

    var variables = {
      search: this.state.searchName,
      page: 1,
      perPage: 12
    };

    var url = 'https://graphql.anilist.co'

    var options = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
          },
          body: JSON.stringify({
            query: query,
            variables: variables
          })
        }

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (this._isMounted) {
        console.log(data);
        this.setState({ 
          loading: false,
          data: data
        })
      }
    } catch (error) {
      this.setState({ loading: true, error: error})
    }
  };

  render() {
    if (this.state.error) {
      return `Error:${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <BadgeHero title="Buscar Serie"/>
        {this.state.loading && ( <Loader/> )}
        {this.state.data.data.Page.media === 0 && ( <h3>No encontramos datos</h3> )}
        <div className="container search-main">
          <div className="row">
            {this.state.data.data.Page.media.map(media => (
              <div className="col-md-6 col-lg-4" key={media.id}>
                <SearchCard media={media}/>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeSearch
