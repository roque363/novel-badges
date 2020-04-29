import React from 'react';
// Components
import { Navbar } from './components';

function BasicLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default BasicLayout;
