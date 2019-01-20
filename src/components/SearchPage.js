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
    address: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSearch = () => this.props.history.push('/search');

  handleSearchResultClick = () => this.props.history.push('/address');

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
        <div className={classes.innerContainer}>
          <div className={classes.searchResults}>
            <SearchResults
              results={[
                {
                  address: '101 bubble gum road',
                  avgRating: '1.2',
                  numRatings: '22',
                  reviews: [
                    { author: 'bob', date: -1, description: 'shit house' },
                    { author: 'bob2', date: 0, description: 'absolute waste' }
                  ]
                },
                {
                  address: '102 thug dr',
                  avgRating: '1.2',
                  numRatings: '22',
                  reviews: [
                    {
                      author: 'bob',
                      date: 1,
                      description: 'great place to raise a family'
                    },
                    {
                      author: 'bob 2',
                      date: 2,
                      description: 'abusive father lives here'
                    }
                  ]
                },
                {
                  address: '467 garbage lane',
                  avgRating: '1.2',
                  numRatings: '22',
                  reviews: [
                    {
                      author: 'bob 3',
                      date: 3,
                      description: "can't beat this price"
                    },
                    {
                      author: 'bob 4',
                      date: 4,
                      description: 'mice infestation'
                    }
                  ]
                },
                {
                  address: '17 falafel drive',
                  avgRating: '1.2',
                  numRatings: '22',
                  reviews: [
                    {
                      author: 'bob 5',
                      date: 6,
                      description: 'landlord is a terrible human being'
                    },
                    {
                      author: 'bob 6',
                      date: 7,
                      description: 'mold in the bathtub'
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
