import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core';
import Review from './Review';

const styles = () => ({
  root: {}
});

const Reviews = ({ classes, property }) => (
  <div>
    <div>Reviews Summary</div>
    <Divider />
    {property.reviews.map(review => (
      <Review key={review.date} property={review} />
    ))}
  </div>
);

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(Reviews);
