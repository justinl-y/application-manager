import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter } from 'react-router-dom';

import muiTheme from './styles/mui-theme';

import firebaseConfig from '../config/firebase';
import store from './redux/store';
import App from './containers/App';
import './styles/index.scss';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
