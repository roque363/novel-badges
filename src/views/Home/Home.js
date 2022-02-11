import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { CardSerie, MainSlider } from 'components';
import data from 'data.json';
import styles from './home.module.scss';

function Home() {
  const seriesArray = [...data.series];

  return (
    <div className={styles.root}>
      <MainSlider />
      <div className={styles.content}>
        <Container maxWidth="lg">
          <div className={styles.title}>
            <h1>Lista de Series</h1>
          </div>
          <Grid container spacing={3}>
            {seriesArray.map((serie, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <CardSerie serie={serie} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
