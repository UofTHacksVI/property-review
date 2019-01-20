import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({});

const ReviewRating = ({ classes, rating }) => (
  <div>
    {Array.from(new Array(5)).map((val, ind) =>
      ind < rating ? (
        <Star color="primary" key={ind.toString()} />
      ) : (
        <StarBorder color="primary" key={ind.toString()} />
      )
    )}
  </div>
);

ReviewRating.propTypes = {
  rating: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewRating);
