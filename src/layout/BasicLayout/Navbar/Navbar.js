import React from 'react';
import { Link } from 'react-router-dom';
import { useResponsive } from 'hooks';
import * as ROUTES from 'router/CONSTANTS';
import styles from './navbar.module.scss';
// Components
import { Toolbar, Slide, useScrollTrigger } from '@material-ui/core';

const Item = ({ path, text }) => (
  <li className={styles.item}>
    <Link className={styles.link} to={path}>
      {text}
    </Link>
  </li>
);

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

function Navbar() {
  const { isDesktop } = useResponsive();
  return (
    <HideOnScroll>
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
    </HideOnScroll>
  );
}

export default Navbar;
