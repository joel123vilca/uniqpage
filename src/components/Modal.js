import React, {Component} from 'react';
import { Button, Dialog, DialogTitle, DialogActions} from 'react-mdl';

class Modal extends Component {

  close = (props) => {
    console.log(this.props.valor);
    props.valor = false;
    console.log(props.valor);
    console.log(this.props.valor);
  };

  render() {
    return (
      <div>
        <Dialog open={this.props.valor} onCancel={this.close}>
          <DialogTitle>Allow data collection?</DialogTitle>
          <DialogActions>
            <Button type='button' onClick={this.close}>Disagree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
 export default Modal;