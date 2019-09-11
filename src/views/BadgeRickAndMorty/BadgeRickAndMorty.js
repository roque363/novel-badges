import React from 'react'
import './badgeRickAndMorty.scss';

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

class BadgeRickAndMorty extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: []
    }
  };

  componentDidMount() {
    this.fetchCharacters();
  };

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null});
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch(error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if(this.state.error) {
      return `Error:${this.state.error.message}`;
    }
    return(
      <React.Fragment>
        <BadgeHero title="Rick y Morty"/>
        {/* Content starts */}
        <div className="container">
          <div className="row">
            {this.state.data.results.map(character => (
              <div className="col-6 col-md-4 col-lg-3" key={character.id}>
                <CharacterCard character={character} />
              </div>
            ))}
          </div>
        </div>

        {this.state.loading && ( <Loader/> )}

        {!this.state.loading && (
          <button onClick={() => this.fetchCharacters()}>Mostrar mas</button>
        )}

        {/* Content ends */}
      </React.Fragment>
    );
  };
}

export default BadgeRickAndMorty