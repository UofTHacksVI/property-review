import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  searchIcon: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
    cursor: 'pointer'
  }
});

const SearchBar = ({ classes, address, handleChange, handleSearch }) => (
  <div className={classes.root}>
    <TextField
      label="Address"
      margin="normal"
      variant="outlined"
      value={address}
      name="address"
      onChange={handleChange}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
      placeholder="Search Google Maps"
      fullWidth
    />
    <div className={classes.searchIcon}>
      <SearchIcon onClick={handleSearch} fontSize="large" />
    </div>
  </div>
);

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchBar);
