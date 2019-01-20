import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SearchResult from './SearchResult';
import Review from './Reviews';

const styles = theme => ({
  root: {
    height: '100%',
    overflowY: 'auto',
    marginRight: theme.spacing.unit * 2
  }
});

class SearchResults extends Component {
  state = {
    selectedResult: null
  };

  render() {
    const { classes, results, handleSearchResultClick } = this.props;
    const { selectedResult } = this.state;

    return (
      <Paper className={classes.root}>
        {selectedResult ? (
          <Review property={selectedResult} />
        ) : (
          results.map(result => (
            <div key={result.address}>
              <SearchResult
                result={result}
                handleClick={res => this.setState({ selectedResult: res })}
              />
              <Divider />
            </div>
          ))
        )}
      </Paper>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  handleSearchResultClick: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchResults);
