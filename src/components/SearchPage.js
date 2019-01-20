import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import Map from './Map';
import SearchResults from './SearchResults';

const styles = () => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
  },
  innerContainer: {
    flexGrow: '1',
    display: 'flex',
    height: '100%'
  },
  searchResults: {
    width: '40%',
    height: '100%'
  }
});

class SearchPage extends Component {
  state = {
    address: '',
    selectedResult: null
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSearch = () => {
    if (!this.state.address) {
      return;
    }
    this.setState({ selectedResult: null });
    this.props.history.push('/search');
  };

  handleResultSelection = selectedResult => this.setState({ selectedResult });

  render() {
    const { address, selectedResult } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SearchBar
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          address={address}
        />
        <div className={classes.innerContainer}>
          <div className={classes.searchResults}>
            <SearchResults
              selectedResult={selectedResult}
              handleResultSelection={this.handleResultSelection}
              results={[
                {
                  address: '101 bubble gum road',
                  avgRating: '1.2',
                  numRatings: '22',
                  reviews: [
                    { rating: 2, author: 'bob', date: -1, body: 'shit house' },
                    {
                      rating: 1,
                      author: 'bob2',
                      date: 0,
                      body: 'absolute waste'
                    }
                  ]
                },
                {
                  address: '102 thug dr',
                  avgRating: '1.2',
                  numRatings: '22',
                  reviews: [
                    {
                      rating: 4,
                      author: 'bob',
                      date: 1,
                      body: 'great place to raise a family'
                    },
                    {
                      rating: 4,
                      author: 'bob 2',
                      date: 2,
                      body: 'great place to raise a family'
                    }
                  ]
                },
                {
                  address: '467 garbage lane',
                  avgRating: '1.2',
                  numRatings: '22',
                  reviews: [
                    {
                      rating: 0,
                      author: 'bob 3',
                      date: 3,
                      body: "can't beat this price"
                    },
                    {
                      rating: 1,
                      author: 'bob 4',
                      date: 4,
                      body: 'mice infestation'
                    }
                  ]
                },
                {
                  address: '17 falafel drive',
                  avgRating: '1.2',
                  numRatings: '22',
                  reviews: [
                    {
                      rating: 3,
                      author: 'bob 5',
                      date: 6,
                      body: 'landlord is a terrible human being'
                    },
                    {
                      rating: 5,
                      author: 'bob 6',
                      date: 7,
                      body: 'mold in the bathtub'
                    }
                  ]
                }
              ]}
              handleSearchResultClick={this.handleSearchResultClick}
            />
          </div>
          <Map />
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchPage);
