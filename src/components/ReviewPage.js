import React from 'react';
import PropTypes from 'prop-types';
import RatingSummary from './RatingSummary';
import { withStyles } from '@material-ui/core/withStyles';

const styles = () => ({
  root: {}
});

const ReviewPage = ({ review }) => (
  <div>
    <RatingSummary ratingSummary={review.ratingSummary} />
  </div>
);

ReviewPage.propTypes = {
  classes: PropTypes.object.isRequired,
  review: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewPage);
