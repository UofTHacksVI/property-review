import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './components/SearchBar';
import Map from './components/Map';
import CreateReview from './components/CreateReview';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

const styles = theme => ({
  root: {
    height: '100vh',
    padding: theme.spacing.unit * 2
  }
});

const App = ({ classes }) => (
  <BrowserRouter>
    <div className={classes.root}>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
    </div>
  </BrowserRouter>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
