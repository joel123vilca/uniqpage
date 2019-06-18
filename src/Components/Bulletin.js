import React, { Component } from 'react';

class Bulletin extends Component {
    render(){
        return (
            <section className="bulletin">
                <div className="bulletin--content">
                    <img 
                         className="bulletin--image"
                        src="http://image.prntscr.com/image/15f7d1b8dca94296b249f56eb6cc78d3.png"
                        alt="image bulletin 1"
                    />
                </div>
                <div className="bulletin--content">
                    <img 
                         className="bulletin--image"
                        src="http://image.prntscr.com/image/f2b0ac9e43334eddac9c1af05e573888.png"
                        alt="image bulletin 2"
                    />
                </div>
                <div className="bulletin--content">
                    <img 
                         className="bulletin--image"
                        src="http://image.prntscr.com/image/6915d39cf813481fa3c19fa292c582ba.png"
                        alt="image bulletin 2"
                    />
                </div>
                <div className="bulletin--content">
                    <img 
                        className="bulletin--image"
                        src="http://image.prntscr.com/image/ad357d428faf4e88ab3bdac78782b523.png"
                        alt="image bulletin 2"
                    />
                </div>
                <div className="bulletin--content">
                    <img 
                        className="bulletin--image"
                        src="http://image.prntscr.com/image/7e98362d62b2490c998fe1472dcb0601.png"
                        alt="image bulletin 2"
                    />
                </div>
            </section>
        );
    }
}

export default Bulletin;