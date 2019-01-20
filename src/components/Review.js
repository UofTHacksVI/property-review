import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const Review = ({ classes, property }) => (
  <div className={classes.root}>
    <span>
      <b>{property.author}</b>
    </span>
    <span>{property.rating}</span>
    <span>{property.date}</span>
    <span>{property.body}</span>
  </div>
);

Review.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
