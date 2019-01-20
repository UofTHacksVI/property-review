import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Review from './Review';
import ReviewSummary from './ReviewSummary';
import CreateReview from './CreateReview';

const styles = theme => ({
  root: { display: 'flex', flexDirection: 'column' },
  container: {
    margin: theme.spacing.unit
  },
  reviews: {
    overflowY: 'auto'
  },
  addReview: {
    margin: theme.spacing.unit,
    alignSelf: 'flex-end'
  },
  summary: {
    margin: theme.spacing.unit
  }
});

class Reviews extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    const { classes, property } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.addReview}>
          <Fab
            size="small"
            color="primary"
            aria-label="Add"
            onClick={this.handleClickOpen}
          >
            <AddIcon />
          </Fab>
          <CreateReview
            property={property}
            open={open}
            handleClickOpen={this.handleClickOpen}
            handleClose={this.handleClose}
          />
        </div>
        <Divider />
        <div className={classes.summary}>
          <ReviewSummary property={property} />
        </div>
        <Divider />
        <div className={classes.reviews}>
          {property.reviews.map(review => (
            <div key={review.date}>
              <Review property={review} />
              <Divider />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(Reviews);
