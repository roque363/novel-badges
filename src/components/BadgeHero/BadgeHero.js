import React from 'react';
import PropTypes from 'prop-types';
import styles from './badgeHero.module.scss';
import { BackgroundStars } from 'assets';

const BadgeHero = (props) => {
  const { title = '', banner = BackgroundStars } = props;

  return (
    <div
      className={styles.root}
      style={{ background: `url('${banner}'), #1b1b25` }}>
      <div className={styles.container}>
        <h1 className={styles.header}>{title}</h1>
      </div>
    </div>
  );
};

BadgeHero.propTypes = {
  title: PropTypes.string,
  banner: PropTypes.any,
};

export default React.memo(BadgeHero);
