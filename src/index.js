import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createStore } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';
import rootReducer from './reducers';
import './index.css';
import Root from './Root';

const store = createStore(rootReducer);

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Root store={store} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
