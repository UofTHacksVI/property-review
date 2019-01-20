import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import AuthPage from './components/AuthPage';

const styles = theme => ({
  root: {
    height: '100vh',
    padding: theme.spacing.unit * 2
  }
});

const App = ({ classes }) => (
  <BrowserRouter>
    <div className={classes.root}>
      <Route path="/home" exact component={HomePage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/" exact component={AuthPage} />
    </div>
  </BrowserRouter>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
