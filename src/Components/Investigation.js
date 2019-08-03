import React, { Component } from 'react';
import investigacion from '../image/investigacion.jpg';

class Investigation extends Component {
    render(){
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <img
                className="d-block w-100 slider"
                src={investigacion}
                alt="banner investigacion"
            />
        </div>
        )
    }
}

export default Investigation;