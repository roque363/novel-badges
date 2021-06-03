import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as VARIABLES from 'constants/variables';
import * as ROUTES from 'router/CONSTANTS';
import { replacePathParams } from 'utils';
import PropTypes from 'prop-types';
import styles from './serieItem.module.scss';
import { TagIcon } from 'icons';

const SerieItem = (props) => {
  const { serie } = props;
  return (
    <RouterLink
      className="link-unstyled"
      to={replacePathParams(ROUTES.BADGES_DETAIL, { slug: serie.slug })}>
      <div className={styles.root}>
        <div className={styles.wrap}>
          <img
            className={styles.avatar}
            src={VARIABLES.URL_IMAGE + serie.cover}
            alt={serie.title}
          />
          <div className={styles.body}>
            <h4 className={styles.title}>{serie.title}</h4>
            <div>
              <span>Story: </span>
              <span className={styles.author}>{serie.story_author} </span>
              <span>Art: </span>
              <span className={styles.author}>{serie.art_author}</span>
            </div>
            <p>{serie.sumary}</p>
          </div>
        </div>
        <div className={styles.footer}>
          <TagIcon />
          <div className={styles.publis}>{serie.published_japan}</div>
        </div>
      </div>
    </RouterLink>
  );
};

SerieItem.propTypes = {
  serie: PropTypes.object.isRequired,
};

export default SerieItem;
