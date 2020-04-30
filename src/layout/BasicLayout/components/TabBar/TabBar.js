import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './tabBar.scss';
// Constans
import * as ROUTES from 'constants/routes';

const LOCATION_PATH = {
  '/': 'tab1',
  '/search': 'tab2',
  '/badges': 'tab3',
  '/badges/:slug': 'tab3',
  '/badges/new': 'tab3',
  '/rick-and-morty': 'tab4',
};

const TAB_PATH = {
  tab1: ROUTES.HOME,
  tab2: ROUTES.SEARCH,
  tab3: ROUTES.BADGES,
  tab4: ROUTES.RICKANDMORTY,
};

const OVERLAY_STATUS = {
  tab1: '0%',
  tab2: '25%',
  tab3: '50%',
  tab4: '75%',
};

const TabBar = (props) => {
  const { history, match } = props;
  // console.log(props);
  const refLocation = LOCATION_PATH[match.path];

  const [tabState, setTabState] = useState({
    tab1: '',
    tab2: '',
    tab3: '',
    tab4: '',
  });
  const [overlay, setOverlay] = useState(null);

  const handleTabClick = (value) => {
    setTabState({
      [value]: 'active',
    });
    setOverlay(OVERLAY_STATUS[value]);
    history.push(TAB_PATH[value]);
  };

  useEffect(() => {
    setTabState({
      [refLocation]: 'active',
    });
    setOverlay(OVERLAY_STATUS[refLocation]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="navigation-tab">
      <div
        className={`navigation-tab-item ${tabState.tab1}`}
        onClick={() => handleTabClick('tab1')}>
        <span className="navigation-tab__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-list">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3" y2="6"></line>
            <line x1="3" y1="12" x2="3" y2="12"></line>
            <line x1="3" y1="18" x2="3" y2="18"></line>
          </svg>
        </span>
        <span className="navigation-tab__txt">Inicio</span>
      </div>
      <div
        className={`navigation-tab-item ${tabState.tab2}`}
        onClick={() => handleTabClick('tab2')}>
        <span className="navigation-tab__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-tag">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7" y2="7"></line>
          </svg>
        </span>
        <span className="navigation-tab__txt">Buscar</span>
      </div>
      <div
        className={`navigation-tab-item ${tabState.tab3}`}
        onClick={() => handleTabClick('tab3')}>
        <span className="navigation-tab__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-bag">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </span>
        <span className="navigation-tab__txt">Lista</span>
      </div>
      <div
        className={`navigation-tab-item ${tabState.tab4}`}
        onClick={() => handleTabClick('tab4')}>
        <span className="navigation-tab__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </span>
        <span className="navigation-tab__txt">Extra</span>
      </div>
      <div className="navigation-tab-overlay" style={{ left: overlay }}></div>
    </nav>
  );
};

export default withRouter(TabBar);
