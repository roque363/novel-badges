import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Routes from 'router/RouterConfig';
import theme from 'theme';
import 'styles/index.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
