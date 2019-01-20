import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import Map from './Map';

const styles = () => ({
  root: { display: 'flex', flexDirection: 'column', height: '100%' },
  map: {
    height: '90%'
  }
});

class HomePage extends Component {
  state = {
    address: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSearch = () => this.props.history.push('/search');

  render() {
    const { address } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SearchBar
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          address={address}
        />
        <div className={classes.map}>
          <Map />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
