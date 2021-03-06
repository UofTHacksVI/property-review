import React from 'react';
import PropTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core';

const styles = () => ({});

class Rating extends React.Component {
  state = {
    hoveredIndex: -1,
    rating: -1
  };

  handleMouseOver = index => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: this.state.rating });
  };

  handleClick = index => {
    if (index === this.state.rating) {
      this.setState({ rating: -1 });
    } else {
      this.setState({ rating: index });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {Array.from([0, 0, 0, 0, 0]).map((x, ind) => {
          if (ind <= this.state.hoveredIndex) {
            return (
              <Star
                key={ind}
                onMouseOver={() => this.handleMouseOver(ind)}
                onMouseLeave={() => this.handleMouseLeave()}
                onClick={() => this.handleClick(ind)}
                ind={ind}
              />
            );
          }
          return (
            <StarBorder
              key={ind}
              onMouseOver={() => this.handleMouseOver(ind)}
              onMouseLeave={() => this.handleMouseLeave()}
              onClick={() => this.handleClick(ind)}
              ind={ind}
            />
          );
        })}
      </div>
    );
  }
}

Rating.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Rating);
