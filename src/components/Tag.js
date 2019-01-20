import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({});

class Tag extends React.Component {
  state = {
    color: 'default'
  };

  handleClick = () => {
    if (this.state.color === 'secondary') {
      this.setState({ color: 'default' });
    } else {
      this.setState({ color: 'secondary' });
    }
  };

  render() {
    return (
      <Chip
        color={this.state.color}
        clickable
        onClick={() => this.handleClick()}
        label={this.props.label}
      />
    );
  }
}

Tag.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default withStyles(styles)(Tag);
