import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import { InfoIcon } from 'icons';
import { replacePathParams } from 'utils';
import { URL_IMAGE } from 'constants/variables';
import { BADGES_DETAIL } from 'router/CONSTANTS';
import styles from './cardSerie.module.scss';

const CardSerie = (props) => {
  const { serie } = props;

  const path = replacePathParams(BADGES_DETAIL, { slug: serie.slug });
  const image = URL_IMAGE + serie.cover;

  return (
    <RouterLink className={styles.link} to={path}>
      <article
        className={styles.root}
        style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.top}>{serie.season}</div>
        <div className={styles.body}>
          <div className={styles.author}>{serie.story_author}</div>
          <h4 className={styles.headline}>{serie.title}</h4>
          <Button
            disableElevation
            className={styles.action}
            startIcon={<InfoIcon />}
            color="secondary"
            variant="contained">
            Mas detalles
          </Button>
        </div>
      </article>
    </RouterLink>
  );
};

CardSerie.defaultProps = {
  serie: {
    id: '1',
    title: '...',
    author: '...',
    season: '...',
    cover: 'the_quintessential_quintuplets.jpg',
  },
};

CardSerie.propTypes = {
  serie: PropTypes.object.isRequired,
};

export default CardSerie;
