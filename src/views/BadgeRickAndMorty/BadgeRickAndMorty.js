import React from 'react'
import './badgeRickAndMorty.scss';

import BadgeHero from '../../components/BadgeHero/BadgeHero';

function CharacterCard(props) {
  const { character } = props;

  return (
    <div 
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}>
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class BadgeRickAndMorty extends React.Component {
  state = {
    data: {
      results: []
    }
  };

  componentDidMount() {
    this.fetchCharacters();
  };

  fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();

    this.setState({
      data: data
    })
  };

  render() {
    return(
      <React.Fragment>
        <BadgeHero title="Rick y Morty"/>
        {/* Content starts */}
        <div className="container">
          <div className="row">
            {this.state.data.results.map(character => (
              <div className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </div>
            ))}
          </div>
        </div>
        {/* Content ends */}
      </React.Fragment>
    );
  };
}

export default BadgeRickAndMorty