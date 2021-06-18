import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useResponsive } from 'hooks';
import * as ROUTES from 'router/CONSTANTS';
import styles from './navbar.module.scss';
// Components
import { Toolbar, useScrollTrigger } from '@material-ui/core';

const Item = ({ path, text }) => (
  <li className={styles.item}>
    <Link className={styles.link} to={path}>
      {text}
    </Link>
  </li>
);

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 180,
  });

  return React.cloneElement(children, {
    className: clsx(styles.root, trigger && styles.affix),
  });
};

function Navbar() {
  const { isDesktop } = useResponsive();
  return (
    <ElevationScroll>
      <nav className={styles.root}>
        <Toolbar>
          <Link className={styles.logo} to={ROUTES.HOME}>
            NovelBadges
          </Link>
          <div className={styles.space}></div>
          {isDesktop && (
            <ul className={styles.content}>
              <Item path={ROUTES.HOME} text="Inicio" />
              <Item path={ROUTES.SEARCH} text="Buscar" />
              <Item path={ROUTES.BADGES} text="Lista" />
              <Item path={ROUTES.RICKANDMORTY} text="Rick y Morty" />
            </ul>
          )}
        </Toolbar>
      </nav>
    </ElevationScroll>
  );
}

export default Navbar;
