import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import { Tag } from 'components';
import styles from './mediaCard.module.scss';

const HtmlTooltip = withStyles((theme) => ({
  popper: {
    zIndex: 1000,
  },
  arrow: {
    color: 'var(--color-background-base)',
    top: '16px !important',
  },
  tooltip: {
    backgroundColor: 'var(--color-background-base)',
    boxShadow: 'var(--shadow-elevation-1)',
    color: 'rgba(0, 0, 0, 0.87)',
    minWidth: '290px',
    padding: '16px',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: theme.typography.pxToRem(12),
    borderRadius: '5px',
  },
}))(Tooltip);

const MediaCard = (props) => {
  const { media } = props;

  const studio = media?.studios?.edges[0];

  const info = (
    <div className={styles.toolInfo}>
      <div className={styles.header}>
        <h6 className={styles.title}>
          <span>{media.title.romaji}</span>
        </h6>
        <p
          className={styles.studio}
          style={{ color: media?.coverImage?.color }}>
          {studio?.node?.name}
        </p>
      </div>
      <div className={styles.hint}>
        <span>{media.format}</span>
        <span> - </span>
        <span>
          {media.season} {media.startDate.year}
        </span>
      </div>
      {media.averageScore && (
        <div className={styles.score}>
          <p>
            <strong>{media.averageScore}%</strong> de aprobación por la
            comunidad
          </p>
        </div>
      )}
    </div>
  );

  return (
    <HtmlTooltip arrow placement="right-start" title={info}>
      <article className={styles.root}>
        <div className={styles.cover}>
          <img src={media.coverImage.extraLarge} alt={media.title.romaji} />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h2>{media.title.romaji}</h2>
            </div>
            <div className={styles.genres}>
              {media?.genres.slice(0, 2).map((genres) => (
                <Tag key={genres} gender={genres} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </HtmlTooltip>
  );
};

export default MediaCard;
