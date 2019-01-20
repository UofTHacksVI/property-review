import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {}
});

const ReviewSummary = ({ classes, property }) => (
  <div className={classes.root}>Review Summary</div>
);

ReviewSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewSummary);
