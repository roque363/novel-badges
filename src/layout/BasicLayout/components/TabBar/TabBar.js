import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import './tabBar.scss';

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
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve">
            <g>
              <g>
                <path
                  d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064
			c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57
			c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52
			s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053
			c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89
			c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024
			c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847
			C455.549,238.499,449.593,232.543,442.246,232.543z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
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
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            x="0px"
            y="0px"
            viewBox="0 0 511.999 511.999"
            style={{ enableBackground: 'new 0 0 511.999 511.999' }}
            xmlSpace="preserve">
            <g>
              <g>
                <path
                  d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
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
            width="24"
            height="24"
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
        <span className="navigation-tab__txt">Lista</span>
      </div>
      <div
        className={`navigation-tab-item ${tabState.tab4}`}
        onClick={() => handleTabClick('tab4')}>
        <span className="navigation-tab__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        <span className="navigation-tab__txt">Extra</span>
      </div>
      <div className="navigation-tab-overlay" style={{ left: overlay }}></div>
    </nav>
  );
};

export default withRouter(TabBar);
