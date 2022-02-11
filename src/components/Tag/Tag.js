import React from 'react';
import clsx from 'clsx';

import styles from './tag.module.scss';

const genderVariant = {
  Comedy: 'comedy',
  Romance: 'romance',
  Action: 'action',
  'Slice of Life': 'slice-of-life',
  Drama: 'drama',
  'Sci-Fi': 'sci-fi',
  Ecchi: 'ecchi',
  Fantasy: 'fantasy',
};

const Tag = (props) => {
  const { gender } = props;
  const color = genderVariant[gender] ? genderVariant[gender] : '';

  return (
    <span className={clsx(styles.root, gender && styles[color])}>{gender}</span>
  );
};

export default Tag;
