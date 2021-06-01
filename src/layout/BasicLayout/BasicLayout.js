import React from 'react';
import { useResponsive } from 'hooks';
import Navbar from './Navbar';
import TabBar from './TabBar';
import styles from './basicLayout.module.scss';

function BasicLayout(props) {
  const { isDesktop } = useResponsive();

  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.root}>{props.children}</div>
      {!isDesktop && <TabBar />}
    </React.Fragment>
  );
}

export default BasicLayout;
