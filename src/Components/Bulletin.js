import React, { Component } from 'react';
import { CardText, Card, CardTitle, CardActions, Button } from 'react-mdl'; 

class Bulletin extends Component {
    render(){
        return (
            <section className="bulletin">
                <div><h2>Boletin informativo</h2></div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto',}}>
                    {/* <img src="http://www.getmdl.io/assets/demos/dog.png"  style={{position:'relative'}}/>
                    <span style={{height: '78px', width:'78px',padding:'10px', background: '#2c3e50',color: '#fff', fontSize: '24px', fontWeight: '500', textAlign:'center', position:'relative'}}>
                            Junio
                            12
                    </span> */}
                    <div className="bulletin--image">
                        <img src="http://www.getmdl.io/assets/demos/dog.png" style={{width:'90%'}}></img>
                        <span className="bulletin--fecha">
                            Junio
                            12
                        </span>
                    </div>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                </div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                </div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                </div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                </div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                </div>
            </section>
        );
    }
}

export default Bulletin;