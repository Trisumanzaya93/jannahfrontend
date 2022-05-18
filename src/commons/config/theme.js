import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const base = createTheme({
  palette: {
    primary: {
      main: "#BE5504",
    },
    secondary: {
      main: "#000000",
    },
  },
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
});

const theme = responsiveFontSizes(base)
export default theme