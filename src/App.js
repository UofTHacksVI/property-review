import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './components/SearchBar';
import Map from './components/Map';
import CreateReview from './components/CreateReview';

const styles = theme => ({
  root: { padding: theme.spacing.unit * 2 }
});

class App extends Component {
  state = {
    address: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes } = this.props;
    const { address } = this.state;

    return (
      <div className={classes.root}>
        <SearchBar address={address} handleChange={this.handleChange} />
        <Map showHeatMap />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
