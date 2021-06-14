import React from 'react';
import clsx from 'clsx';
import styles from './characterCard.module.scss';

const STATUS = {
  Alive: styles.alive,
  Dead: styles.dead,
};

const CharacterCard = (props) => {
  const { character } = props;
  return (
    <div className={styles.root}>
      <img
        className={styles.cover}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.content}>
        <h2 className={styles.name}>{character.name}</h2>
        <div
          className={clsx(
            styles.status,
            STATUS[character.status] || styles.unknown,
          )}>
          {character.status}
        </div>
        <div className={styles.desc}>Origen: {character.origin.name}</div>
        <div className="actions">
          <span className="actions__trade">{character.species}</span>
          <span> - </span>
          <span className="actions__cancel">{character.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
