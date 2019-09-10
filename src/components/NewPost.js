import React from 'react';

class NewPost extends React.Component {
  state = {
    full_name: 'joel',
    email: 'joel@gmail.com',
    comment:'hola',
    topic_id: 1

  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      full_name: 'joel',
      email: 'joel@gmail.com',
      comment: 'hola',
      topic_id: 1
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="nombre completo"
              className="form-control"
              name="title"
              onChange={ this.handleInputChange }
              value={ this.state.full_name }
            />
          </div>
          <div className="form-group">
              <input
              type="email"
              placeholder="Email"
              className="form-control"
              name="title"
              onChange={ this.handleInputChange }
              value={ this.state.email }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Body"
              className="form-control"
              name="body"
              onChange={ this.handleInputChange }
              value={ this.state.comment }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;