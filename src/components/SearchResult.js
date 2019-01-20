import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2
  }
});

const SearchResult = ({ classes, result, handleClick }) => (
  <div className={classes.root} onClick={() => handleClick(result)}>
    <span>
      <b>{result.address}</b>
    </span>
    <span>{result.avgRating}</span>
    <span>{result.numRatings}</span>
  </div>
);

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchResult);
