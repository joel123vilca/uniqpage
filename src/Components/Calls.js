import React, { Component } from 'react';
import ExpandCall from './ExpandCall';
import convocatoria from '../image/convocatoria-v2.jpg';

class Calls extends Component {
    render(){
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <img
                className="d-block w-100 slider"
                src={convocatoria}
                alt="banner convocatoria"
            />
            <ExpandCall></ExpandCall>
        </div>
        )
    }
}

export default Calls;