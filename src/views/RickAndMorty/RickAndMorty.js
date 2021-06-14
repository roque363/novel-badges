import React, { useEffect, useState } from 'react';
import { rickandmortyService } from 'services';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './rickAndMorty.module.scss';
// Components
import { BadgeHero } from 'components';
import { Container, Grid } from '@material-ui/core';
import { BackgroundRickMorty } from 'assets';
import CharacterCard from './CharacterCard';

const LoaderBottom = () => <h4 className={styles.loader}>Cargando...</h4>;

function RickAndMorty() {
  // eslint-disable-next-line no-unused-vars
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
    const res = await rickandmortyService.getCharacterList(nextPage);
    console.log(res);
    if (!res.info.error) {
      setData({
        info: res.data.info,
        results: [].concat(data.results, res.data.results),
      });
      setNextPage(nextPage + 1);
      if (res.data.info.next !== null) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } else {
      setError(res.info.message);
    }
    setLoading(false);
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
    <>
      <BadgeHero title="Rick y Morty" banner={BackgroundRickMorty} />
      <InfiniteScroll
        dataLength={data.results.length}
        next={fetchCharacters}
        hasMore={hasMore}
        loader={<LoaderBottom />}>
        <Container maxWidth="lg" className={styles.root}>
          <Grid container spacing={3}>
            {data.results.map((character) => (
              <Grid item xs={12} sm={4} md={3} key={character.id}>
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </InfiniteScroll>
    </>
  );
}

export default RickAndMorty;
