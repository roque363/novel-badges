import { useEffect } from 'react';
import { useSearchSerie } from 'hooks/useSearchData';
import { Link as RouterLink } from 'react-router-dom';
import * as ROUTES from 'router/CONSTANTS';
import styles from './badgeList.module.scss';
import data from 'data.json';
// Components
import { BadgeHero, SerieItem } from 'components';
import { Button, Container, TextField } from '@material-ui/core';

function BadgeList() {
  const array = data.series;
  const { query, setQuery, filteredData } = useSearchSerie(array);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BadgeHero title="Lista de Series" />
      <Container maxWidth="lg" className={styles.root}>
        <div className={styles.actions}>
          <Button
            component={RouterLink}
            to={ROUTES.BADGES_NEW}
            variant="contained"
            color="primary">
            Nueva Waifu
          </Button>
        </div>
        <div className={styles.list}>
          <div className={styles.form}>
            <TextField
              fullWidth
              label="Buscar Serie"
              variant="outlined"
              margin="dense"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <p className={styles.count}>
            {filteredData.length} series encontradas
          </p>
          {filteredData.length > 0 ? (
            <ul>
              {filteredData.map((serie) => {
                return (
                  <li key={serie.id}>
                    <SerieItem serie={serie} />
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className={styles.noContent}>
              <h5>No se encontro ninguna serie</h5>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default BadgeList;
