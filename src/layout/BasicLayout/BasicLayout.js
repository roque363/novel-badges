import React from 'react';
import { useResponsive } from 'hooks';
// Components
import { Navbar, TabBar } from './components';

function BasicLayout(props) {
  const { isDesktop } = useResponsive();

  return (
    <React.Fragment>
      <Navbar />
      <div style={{ minHeight: '88vh' }}>{props.children}</div>
      {!isDesktop && <TabBar />}
    </React.Fragment>
  );
}

export default BasicLayout;
