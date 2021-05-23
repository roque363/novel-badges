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
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400'],
  },
  text: {
    // primary: '#0e0e10',
    // secondary: '#1f1f23',
  },
  // icon: '#363435',
  divider: colors.grey[200],
};

export default palette;
