import React from 'react';
import { Link } from 'react-router-dom';
import { useResponsive } from 'hooks';
import * as ROUTES from 'constants/routes';
import styles from './navbar.module.scss';
// Components
import { Toolbar } from '@material-ui/core';

const Item = ({ path, text }) => (
  <li className={styles.item}>
    <Link className={styles.link} to={path}>
      {text}
    </Link>
  </li>
);

function Navbar() {
  const { isDesktop } = useResponsive();
  return (
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
  );
}

export default Navbar;
