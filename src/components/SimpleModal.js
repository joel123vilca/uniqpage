import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import cronograma from '../image/popup_cas.jpg';

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <IconButton aria-label="close"  style={{position: 'relative'}} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      <Button href="http://uniq.edu.pe/convocatorias">
        <img
          width="600"
          height="500"
          src={cronograma}
          alt="modaladmision"
        />
      </Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleModal() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
