
import React, { Component } from 'react';

class Notfound extends Component {
    render(){
        return (
            <div className="notfound">
                <h1>404 Error Page </h1>
                <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
                </section>
            <div className="link-container">
            <a  href="/inicio" className="more-link">Ir al inicio</a>
            </div>
        </div>
        );
    }
}

export default Notfound;