import { useState, useEffect } from 'react';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';

import { URL_IMAGE } from 'constants/variables';
import { BadgeHero, Loader, ModalFoto } from 'components';
import db from 'data.json';
import styles from './badgeDetail.module.scss';

function BadgeDetail(props) {
  const slug = props.match.params.slug;
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const serie = await db.series.find((serie) => serie.slug === slug);
      setLoading(false);
      if (isMounted) {
        setData(serie);
        // console.log(serie)
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    return () => {
      setIsMounted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <BadgeHero title={data.title} />
      <Container maxWidth="lg" className={styles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              className={clsx(styles.paper, styles.cover)}
              onClick={handleOpen}>
              <img src={`${URL_IMAGE}${data.cover}`} alt={data.title} />
            </Paper>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              data-toggle="modal"
              data-target="#imageModal"
              onClick={handleOpen}>
              Ver Imagen
            </Button>
          </Grid>
          <Grid item xs={12} md={8} style={{ height: '100%' }}>
            <Paper elevation={0} className={clsx(styles.paper, styles.info)}>
              <h3 className={styles.title}>Información</h3>
              <div className={styles.body}>
                <p className={styles.text}>{data.sumary}</p>
                <div className={styles.item}>
                  <p>Id</p>
                  <h6>#{data.id}</h6>
                </div>
                <div className={styles.item}>
                  <p>Temporada</p>
                  <h6>{data.season}</h6>
                </div>
                <div className={styles.item}>
                  <p>Historia por</p>
                  <h6>{data.story_author}</h6>
                </div>
                <div className={styles.item}>
                  <p>Arte por</p>
                  <h6>{data.art_author}</h6>
                </div>
                <div className={styles.item}>
                  <p>Publicado en Japón por</p>
                  <h6>{data.published_japan}</h6>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <ModalFoto
        open={open}
        handleClose={handleClose}
        image={data.cover}
        name={data.title}
      />
    </>
  );
}

export default BadgeDetail;
