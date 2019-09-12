import React from 'react'
import './badgeRickAndMorty.scss';
import InfiniteScroll from "react-infinite-scroll-component";

import BadgeHero from '../../components/BadgeHero/BadgeHero';
import Loader from '../../components/Loader/Loader';

function CharacterCard(props) {
  const { character } = props;
  return (
    <React.Fragment>
      <div className="CharacterCard" style={{ backgroundImage: `url(${character.image})` }}>
        <div className="CharacterCard__name-container text-truncate">
          {character.name}
        </div>
      </div>
    </React.Fragment>
  );
}

function LoaderBottom() {
  return (
    <React.Fragment>
      <h4 className="loader-text">Cargando...</h4>
    </React.Fragment>
  );
}

class BadgeRickAndMorty extends React.Component {
  state = {
    nextPage: 1,
    loading: false,
    hasMore: false,
    error: null,
    data: {
      info: {},
      results: []
    }
  };
  _isMounted = true;

  componentDidMount() {
    this._isMounted = true;
    this.fetchCharacters();
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null});
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
      const data = await response.json();

      if (this._isMounted) {
        this.setState({
          loading: false,
          data: {
            info: data.info,
            results: [].concat(this.state.data.results, data.results)
          },
          nextPage: this.state.nextPage + 1,
        });
  
        if (this.state.data.info.next !== "") {
          this.setState({ hasMore: true })
        } else {
          this.setState({ hasMore: false })
        }

      }

    } catch(error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return `Error:${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <BadgeHero title="Rick y Morty"/>
        {/* Content starts */}
        <InfiniteScroll
          dataLength={this.state.data.results.length}
          next={this.fetchCharacters}
          hasMore={this.state.hasMore}
          loader={<LoaderBottom/>}>
          <div className="container">
            <div className="row">
              {this.state.data.results.map(character => (
                <div className="col-6 col-md-4 col-lg-3" key={character.id}>
                  <CharacterCard character={character} />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>

        {this.state.loading && ( <Loader/> )}
        {/* {!this.state.loading && ( <button onClick={() => this.fetchCharacters()}>Mostrar mas</button> )} */}

        {/* Content ends */}
      </React.Fragment>
    );
  };
}

export default BadgeRickAndMorty
