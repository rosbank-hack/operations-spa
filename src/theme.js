import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

export default createMuiTheme({
  spacing: 4,
  shadows: [],
  palette: {
    primary: {
      dark: blue[900],
      main: blue[800],
      light: blue[600],
    },
    secondary: {
      dark: grey[400],
      main: grey[300],
      light: grey[200],
      contrastText: grey[900],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[400],
    },
  },
});
