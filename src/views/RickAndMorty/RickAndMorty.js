import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import InfiniteScroll from 'react-infinite-scroll-component';

import { rickandmortyService } from 'services';
import { BackgroundRickMorty } from 'assets';
import { BadgeHero } from 'components';
import CharacterCard from './CharacterCard';
import styles from './rickAndMorty.module.scss';

const LoaderBottom = () => <h4 className={styles.loader}>Cargando...</h4>;

function RickAndMorty() {
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
    // console.log(res);
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
    return (
      <>
        <BadgeHero title="Rick y Morty" banner={BackgroundRickMorty} />
        <h5> Error:{error.message}</h5>
      </>
    );
  }

  return (
    <>
      <BadgeHero title="Rick y Morty" banner={BackgroundRickMorty} />
      {loading ? (
        <Container maxWidth="lg" className={styles.root}>
          <Grid container spacing={3}>
            {Array.from(new Array(8)).map((item, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Skeleton
                  variant="rect"
                  height={410}
                  style={{ borderRadius: '4px' }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
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
      )}
    </>
  );
}

export default RickAndMorty;
