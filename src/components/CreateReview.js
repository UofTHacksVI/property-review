import React from 'react';
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

const CreateReview = ({ handleClose, open }) => (
  <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Rate and Review</DialogTitle>
      <DialogContent>
        <Rating />
        <Tag label="Mold" />
        <Tag label="Bad Landlord" />
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
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Post
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

CreateReview.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default CreateReview;
