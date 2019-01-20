import React from 'react';
import PropTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core';

const styles = () => ({});

const Rating = ({
  classes,
  hoveredIndex,
  rating,
  handleMouseOver,
  handleMouseLeave,
  handleClick
}) => (
  <div className={classes.root}>
    {Array.from([0, 0, 0, 0, 0]).map((x, ind) => {
      if (ind <= hoveredIndex) {
        return (
          <Star
            key={ind}
            onMouseOver={() => handleMouseOver(ind)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick(ind)}
            ind={ind}
          />
        );
      }
      return (
        <StarBorder
          key={ind}
          onMouseOver={() => handleMouseOver(ind)}
          onMouseLeave={() => handleMouseLeave()}
          onClick={() => handleClick(ind)}
          ind={ind}
        />
      );
    })}
  </div>
);

Rating.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Rating);
