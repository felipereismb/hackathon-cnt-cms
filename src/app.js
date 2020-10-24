import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Theme material-ui
import { theme } from '~/styles';
import { ThemeProvider } from '@material-ui/styles';

import './config/ReactotronConfig';

import Routes from './routes/index';
import history from './services/history';
import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </ThemeProvider>
  </Provider>
);

export default App;
