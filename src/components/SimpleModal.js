import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import cronograma from '../image/popup_ranking.jpg';
import './modal.css';
function SimpleDialog(props) {
  const { onClose, open, imagen ,url } = props;
  console.log(props);
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
  const [open, setOpen] = React.useState();
  const [imagen, setImagen] = React.useState();
  const [url, setUrl] = React.useState();
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    fetch(`http://test1.uniq.edu.pe/public/api/configurations/general?banner=${true}`,{method:"GET"})
    .then(res => res.json())
    .then(response => {
      setOpen(response.popup_status);
      setImagen(response.image_path);
      setUrl(response.url);
    })
  })

  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose}  imagen={imagen} url={url}/>
    </div>
  );
}
