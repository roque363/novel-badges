import React, { useEffect, useRef } from 'react';
import { withRouter, Link as RouterLink, useLocation } from 'react-router-dom';
// import { cls } from 'utils';
import * as ROUTES from 'router/CONSTANTS';
import clsx from 'clsx';
import styles from './tabBar.module.scss';
import {
  FolderOutlineIcon,
  // ImageOutlineIcon,
  MenuIcon,
  SearchIcon,
  LayersOutlineIcon,
  // KanbanOutlineIcon,
} from 'icons';

const TabBarItem = ({ itemRef, href, icon: Icon, color }) => {
  const colorClass = `item--${color}`;
  return (
    <RouterLink
      to={href}
      ref={itemRef}
      className={clsx(styles.item, styles[colorClass])}>
      <Icon className={styles.icon} />
    </RouterLink>
  );
};

const TabBar = (props) => {
  const { match } = props;
  const location = useLocation();
  const menuRef = useRef(null);
  const menuBorderRef = useRef(null);
  const itemActiveRef = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);
  // const item5Ref = useRef(null);

  const LOCATION_REF = {
    '/': item1Ref,
    '/search': item2Ref,
    '/badges': item3Ref,
    '/badges/:slug': item3Ref,
    '/rick-and-morty': item4Ref,
    '/badges-new': item3Ref,
  };

  const menuListener = () => {
    if (itemActiveRef.current) {
      itemActiveRef.current.classList.remove(styles.active);
    }

    const activeItem = LOCATION_REF[match.path];

    if (activeItem) {
      const activeItemNode = activeItem.current;
      activeItemNode.classList.add(styles.active);

      itemActiveRef.current = activeItemNode;
      offsetMenuBorder(activeItemNode);
    }
  };

  const offsetMenuBorder = (element) => {
    const offsetActiveItem = element.getBoundingClientRect();
    const menuNode = menuRef.current;
    const menuBorderNode = menuBorderRef.current;
    const left =
      Math.floor(
        offsetActiveItem.left -
          menuNode.offsetLeft -
          (menuBorderNode.offsetWidth - offsetActiveItem.width) / 2,
      ) + 'px';
    menuBorderNode.style.transform = `translate3d(${left}, 0 , 0)`;
  };

  useEffect(() => {
    menuListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <menu className={styles.root} ref={menuRef}>
      <div className={styles.wrap}>
        <TabBarItem
          itemRef={item1Ref}
          href={ROUTES.HOME}
          icon={MenuIcon}
          color="orange"
        />
        <TabBarItem
          itemRef={item2Ref}
          href={ROUTES.SEARCH}
          icon={SearchIcon}
          color="magenta"
        />
        <TabBarItem
          itemRef={item3Ref}
          href={ROUTES.BADGES}
          icon={LayersOutlineIcon}
          color="geekblue"
        />
        <TabBarItem
          itemRef={item4Ref}
          href={ROUTES.RICKANDMORTY}
          icon={FolderOutlineIcon}
          color="cyan"
        />
        {/*
          <TabBarItem
            itemRef={item5Ref}
            href={ROUTES.BADGES_NEW}
            icon={ImageOutlineIcon}
            color="gold"
          />
          */}
        <div className={styles.border} ref={menuBorderRef}></div>
      </div>
      <div className={styles.svgContainer}>
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)">
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>
    </menu>
  );
};

export default withRouter(TabBar);
