import React, { useEffect, useState } from 'react';
import './rickAndMorty.scss';
// Dependencies
import InfiniteScroll from 'react-infinite-scroll-component';
// Components
import BadgeHero from 'components/BadgeHero';
import Loader from 'components/Loader';

const STATUS_STYLE = {
  Alive: 'alive',
  Dead: 'dead',
};

const CharacterCard = (props) => {
  const { character } = props;

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-card__content">
        <h2 className="character-card__name">{character.name}</h2>
        <div
          className={`character-card__status ${
            STATUS_STYLE[character.status] || 'unknown'
          }`}>
          {character.status}
        </div>
        <div className="desc">Origen: {character.origin.name}</div>
        <div className="actions">
          <button className="actions__trade">{character.species}</button>
          <button className="actions__cancel">{character.gender}</button>
        </div>
      </div>
    </div>
  );
};

const LoaderBottom = () => {
  return (
    <React.Fragment>
      <h4 className="loader-text">Cargando...</h4>
    </React.Fragment>
  );
};

function RickAndMorty(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [nextPage, setNextPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [data, setData] = useState({
    info: {},
    results: [],
  });

  const fetchCharacters = async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${nextPage}`,
      );
      const responseData = await response.json();
      // console.log(responseData);
      if (response.status === 200) {
        setData({
          info: responseData.info,
          results: [].concat(data.results, responseData.results),
        });
        setNextPage(nextPage + 1);

        if (data.info.next !== '') {
          setHasMore(true);
        } else {
          setHasMore(false);
        }

        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return `Error:${error.message}`;
  }

  return (
    <div className="rick-morty-list">
      <BadgeHero title="Rick y Morty" />
      <InfiniteScroll
        dataLength={data.results.length}
        next={fetchCharacters}
        hasMore={hasMore}
        loader={<LoaderBottom />}>
        <div className="container rick-morty-list__cotainer">
          <div className="row">
            {data.results.map((character) => (
              <div className="col-md-4 col-lg-3" key={character.id}>
                <CharacterCard character={character} />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
      {loading && <Loader />}
    </div>
  );
}

export default RickAndMorty;
