import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const palette = {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#000009',
    main: '#1c2331',
    light: '#444b5a',
  },
  secondary: {
    contrastText: white,
    dark: colors.deepPurple[900],
    main: colors.deepPurple[600],
    light: colors.deepPurple[100],
  },
  text: {
    primary: '#212529',
    // secondary: '#1f1f23',
  },
  // icon: '#363435',
  divider: colors.grey[200],
};

export default palette;
