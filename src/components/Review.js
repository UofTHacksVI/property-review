import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import ReviewRating from './ReviewRating';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2
  }
});

const Review = ({ classes, property }) => (
  <div className={classes.root}>
    <span>
      <b>{property.author}</b>
    </span>
    <ReviewRating rating={property.rating} />
    <span>{property.date}</span>
    <span>{property.body}</span>
  </div>
);

Review.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
