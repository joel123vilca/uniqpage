import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class NewPost extends React.Component {
  state = {
      full_name: '',
      email: '',
      comment:'',
      topic_id: 1,
      open: false
    }
    handleClose = (event, reason)=> {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({
        open: false
      });
    };
    handleEmailChange = e => {
      this.setState({
        email: e.target.value
      });
    };
    handleNameChange = e => {
     this.setState({
      full_name: e.target.value
    });
  };
  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.full_name.trim() && this.state.email.trim() && this.state.comment.trim()) {
      this.props.onAddPost(this.state);
      this.setState({
        open: true
      });
      this.handleReset();
    }
  };
  handleReset = () => {
    this.setState({
      full_name: '',
      email: '',
      comment:''
    });
  };
  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Nombre completo"
              className="form-control"
              name="title"
              onChange={ this.handleNameChange }
              value={ this.state.full_name }
              required
            />
          </div>
          <div className="form-group">
              <input
              type="email"
              placeholder="Email"
              className="form-control"
              name="title"
              onChange={ this.handleEmailChange }
              value={ this.state.email }
              required
            />
          </div>
          <div className="form-group">
            <textarea
              cols="40"
              rows="4"
              placeholder="Mensaje"
              className="form-control"
              name="body"
              onChange={ this.handleCommentChange }
              value={ this.state.comment }
              required>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-light">Enviar</button>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
           >
            <SnackbarContent
            style={{background: 'green'}}
            aria-describedby="client-snackbar"
            message={
            <span id="client-snackbar" style={{ color: 'white' }}>
              <CheckCircleIcon />
              Su mensaje se envio con exito!
            </span>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
                <CloseIcon/>
              </IconButton>,
            ]}
            />
          </Snackbar>
        </form>
      </div>
    );
  }
}

export default NewPost;