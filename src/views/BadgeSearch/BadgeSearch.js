import { useEffect, useState, useCallback } from 'react';
import { Container, Grid, InputBase, IconButton } from '@material-ui/core';

import { searchRequest } from 'utils/makeRequestCreator';
import { BadgeHero, Loader } from 'components';
import { SearchIcon } from 'icons';
import MediaCard from './MediaCard';
import { BackgroundHeader2 } from 'assets';
import styles from './badgeSearch.module.scss';

function BadgeSearch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMounted, setMounted] = useState(false);
  const [search, setSearch] = useState('');
  const [series, setSeries] = useState({
    pageInfo: {
      total: '',
      currentPage: '',
      lastPage: '',
      hasNextPage: false,
      perPage: '',
    },
    media: [],
  });

  const handleChange = (e) => {
    if (e.target.name === 'search') {
      setSearch(e.target.value);
    }
  };

  const handleClick = (e) => {
    fetchData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

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
          media (id: $id, search: $search, sort: [POPULARITY_DESC]) {
            id
            title {
              romaji
              native
            }
            description
            type
            format
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
            isAdult
            averageScore,
            siteUrl
            coverImage {
              extraLarge
              color
            }
            popularity
            studios {
              edges {
                isMain
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `;

    var variables = {
      search: search,
      page: 1,
      perPage: 24,
    };

    const options = { query: query, variables: variables };

    const res = await searchRequest(options);
    const page = res?.data?.Page;

    setSeries(page);

    setLoading(false);
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <BadgeHero title="Buscar Series" banner={BackgroundHeader2} />
      <Container maxWidth="lg">
        <div className={styles.wrap}>
          <form className={styles.search} action="" onSubmit={handleSubmit}>
            <IconButton
              className={styles.iconButton}
              type="submit"
              aria-label="search"
              onClick={handleClick}>
              <SearchIcon />
            </IconButton>
            <InputBase
              className={styles.input}
              id="search"
              name="search"
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Buscar series ..."
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </form>
        </div>
        {!error ? (
          <div className={styles.wrap}>
            <Grid container spacing={3}>
              {series?.media.map((media) => (
                <Grid item key={media.id} xs={6} sm={4} md={3} lg={2}>
                  <MediaCard media={media} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          `Error: ${error.message}`
        )}
      </Container>
      {loading && !isMounted && <Loader />}
      {series?.media === 0 && <h3>No encontramos datos</h3>}
    </>
  );
}

export default BadgeSearch;
