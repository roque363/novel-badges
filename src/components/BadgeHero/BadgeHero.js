import React from 'react';
import PropTypes from 'prop-types';
import styles from './badgeHero.module.scss';
import { BackgroundHeader } from 'assets';
import { Container } from '@material-ui/core';

const BadgeHero = (props) => {
  const { title = '', banner = BackgroundHeader } = props;

  return (
    <div
      className={styles.root}
      style={{ background: `url('${banner}'), #1b1b25` }}>
      <div className={styles.container}>
        <Container maxWidth="lg">
          <h1 className={styles.header}>{title}</h1>
        </Container>
      </div>
    </div>
  );
};

BadgeHero.propTypes = {
  title: PropTypes.string,
  banner: PropTypes.any,
};

export default React.memo(BadgeHero);
