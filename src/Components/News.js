import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showNews} from '../actions';
import Button from '@material-ui/core/Button';
import './news.css';

class News extends Component {
  componentWillMount() {
    this.props.showNews()
  }
  renderNewsList(){
    return this.props.news
    .map((release,i) => {
      return (
        <div className="news--root" key={release.id}>
        <h4 className="news--title">COMUNICADO Nº 0{i+1}</h4>
        <embed src={release.file_path} width="100%" height="130" />
        <p className="news--description">{release.title}</p>
        <Button href={release.file_path}  target="_blank" variant="contained" style={{ fontSize: 15, color: 'white',background:'teal'}}>Leer mas</Button>
        <br></br>
        </div>
      )
    })
  }
    render(){
        return (
            <div>
                <h2 className="bulletin-title">Comunicados Oficiales</h2>
                <center>
                  {this.renderNewsList()}
                </center>
                <br></br>
            </div>
        )
    }
}
function mapStateToProps(state) {
  return {
    news: state.news.news
  }
}
export default connect(mapStateToProps, { showNews })(News);