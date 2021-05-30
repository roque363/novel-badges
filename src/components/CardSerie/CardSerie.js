import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { replacePathParams } from 'utils';
import * as VARIABLES from 'constants/variables';
import * as ROUTES from 'router/CONSTANTS';
import PropTypes from 'prop-types';
import styles from './cardSerie.module.scss';
// Componets
import { Button } from '@material-ui/core';
import { InfoIcon } from 'icons';

const CardSerie = (props) => {
  const { serie } = props;
  return (
    <RouterLink
      className={styles.link}
      to={replacePathParams(ROUTES.BADGES_DETAIL, { slug: serie.slug })}>
      <article
        className={styles.root}
        style={{
          backgroundImage: `url(${VARIABLES.URL_IMAGE}${serie.cover})`,
        }}>
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
