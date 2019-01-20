import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SearchResult from './SearchResult';
import Reviews from './Reviews';

const styles = theme => ({
  root: {
    height: '100%',
    overflowY: 'auto',
    marginRight: theme.spacing.unit * 2
  }
});

const SearchResults = ({
  classes,
  results,
  selectedResult,
  handleResultSelection
}) => (
  <Paper className={classes.root}>
    {selectedResult ? (
      <Reviews property={selectedResult} />
    ) : (
      results.map(result => (
        <div key={result.address}>
          <SearchResult
            result={result}
            handleClick={() => handleResultSelection(result)}
          />
          <Divider />
        </div>
      ))
    )}
  </Paper>
);

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  selectedResult: PropTypes.object,
  handleResultSelection: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchResults);
