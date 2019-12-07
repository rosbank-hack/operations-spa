import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Provider as StoreProvider } from 'react-redux';
import { createBrowserHistory } from 'history';

import configureStore from './store';
import Router from './Router';
import theme from './theme';

const history = createBrowserHistory();
const store = configureStore(history);

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history} />
    </ThemeProvider>
  </StoreProvider>
);

export default App;
