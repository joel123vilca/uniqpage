import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showStories } from '../actions';
class Bulletins extends Component {
    componentWillMount(){
        this.props.showStories()
    }
    renderListBulletin(){
        return this.props.stories.map((storie) => {
            return (
                <div key={storie.id}>
                    <h4>{storie.title}</h4>
                    <div>
                    <span>{storie.month}</span>
                    <span>{storie.day}</span>
                    </div>
                </div>
            )
        });
    }

    render(){
        return(
            <div>
                <h3>Lista de Boletin Informativo UNIQ</h3>
                {this.renderListBulletin()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      stories: state.storie.lista
    }
}

export default connect(mapStateToProps, { showStories })(Bulletins);