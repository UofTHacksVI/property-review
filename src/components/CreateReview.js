import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Rating from './Rating';
import Tag from './Tag';
import api from '../api/api';

class CreateReview extends Component {
  state = {
    author: 'Unknown',
    date: 0,
    description: '',
    hoveredIndex: -1,
    rating: -1,
    tags: {}
  };

  handleClose = () => {
    this.setState({
      author: 'Unknown',
      date: 0,
      description: '',
      rating: 0,
      tags: {}
    });
    this.props.handleClose();
  };

  handlePost = () => {
    console.log(this.state.author);
    console.log(this.state.date);
    console.log(this.state.description);
    console.log(this.state.rating);
    console.log(this.state.tags);
    api.reviews
      .anything({
        address: this.props.property.address,
        author: this.state.author,
        description: this.state.description,
        rating: this.state.rating.toString(),
        tagged: 'mold'
      })
      .then(res => console.log(res));
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
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Rate and Review</DialogTitle>
          <DialogContent>
            <Rating
              hoveredIndex={this.state.hoveredIndex}
              rating={this.state.rating}
              handleMouseOver={this.handleMouseOver}
              handleMouseLeave={this.handleMouseLeave}
              handleClick={this.handleClick}
            />
            <Tag label="Mold" />
            <Tag label="Leaky" />
            <Tag label="Dangerous" />
            <DialogContentText>
              Please provide more information about this property here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="standard-textarea"
              label="Share details of your experience at this property"
              multiline
              fullWidth
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.handlePost();
                this.handleClose();
              }}
              color="primary"
            >
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CreateReview.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired
};

export default CreateReview;
