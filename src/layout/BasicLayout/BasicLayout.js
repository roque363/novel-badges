import React from 'react';
// Dependencies
import { useMediaQuery } from 'react-responsive';
// Components
import { Navbar, TabBar } from './components';

function BasicLayout(props) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' });

  return (
    <React.Fragment>
      <Navbar />
      <div style={{ minHeight: '85vh' }}>{props.children}</div>
      {isTabletOrMobile && <TabBar />}
    </React.Fragment>
  );
}

export default BasicLayout;
