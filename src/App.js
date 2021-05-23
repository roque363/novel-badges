import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from 'router/router';
import theme from 'theme';
import './index.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
