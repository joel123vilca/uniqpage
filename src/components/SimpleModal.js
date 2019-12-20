import React , {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import cronograma from '../image/popup_ranking.jpg';
import './modal.css';
function SimpleDialog(props) {
  const { onClose, open, imagen ,url } = props;
  function handleClose() {
    onClose(false);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <a target="_blank" href={url}>
        <img
          className="imagen-modal"
          src={imagen}
          alt="modaladmision"
        />
      </a>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleModal() {
  const initialOpenState = false;
  const [open, setOpen] = useState(initialOpenState);
  const [imagen, setImagen] = useState();
  const [url, setUrl] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const fetchModal = async () => {
    const apiCall = await fetch(`http://test1.uniq.edu.pe/public/api/configurations/general?banner=${true}`,{method:"GET"});
    const modal = await apiCall.json();
    setOpen(modal.popup_status);
    setImagen(modal.image_path);
    setUrl(modal.url);
  }
  useEffect(()=>{
    fetchModal();
  },[])

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose}  imagen={imagen} url={url}/>
    </div>
  );
}
