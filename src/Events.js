import React, {Component} from 'react';
import {  Grid,  Card, CardTitle, CardActions, Button,CardText } from 'react-mdl';

class Events extends Component{
    render() {
        return (
            <div>
              <h2 style={{lineHeight: '1.25em', fontSize:'3.0517578125em', fontFamily:'Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif',fontWeight: '900',textAlign:'center'}}>BOLETIN INFORMATIVO</h2>
              <Grid style={{backgroundColor: 'white', height:'400px'}}>
                <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '1%', marginLeft:'5%',padding:'10px'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                        <span style={{height: '78px', width:'78px',padding:'10px', background: '#2c3e50',color: '#fff', fontSize: '24px', fontWeight: '500', textAlign:'center'}}>
                            Junio
                            12
                        </span>
                    </CardTitle>
                        <CardText style={{ color:'black'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.<br/><br/>
                        <time>through May 14, 2020</time>
                        </CardText>
                    <CardActions border>
                        <Button  colored>View Updates</Button>
                    </CardActions>
                </Card>
                <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '1%', marginLeft:'5%',padding:'10px'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                        <span style={{height: '78px', width:'78px',padding:'10px', background: '#2c3e50',color: '#fff', fontSize: '24px', fontWeight: '500', textAlign:'center'}}>
                            Junio
                            12
                        </span>
                    </CardTitle>
                        <CardText style={{ color:'black'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.<br/><br/>
                        <time>through May 14, 2020</time>
                        </CardText>
                    <CardActions border>
                        <Button  colored>View Updates</Button>
                    </CardActions>
                </Card>
                <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '1%', marginLeft:'5%',padding:'10px'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                        <span style={{height: '78px', width:'78px',padding:'10px', background: '#2c3e50',color: '#fff', fontSize: '24px', fontWeight: '500', textAlign:'center'}}>
                            Junio
                            12
                        </span>
                    </CardTitle>
                        <CardText style={{ color:'black'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.<br/><br/>
                        <time>through May 14, 2020</time>
                        </CardText>
                    <CardActions border>
                        <Button  colored>View Updates</Button>
                    </CardActions>
                </Card>
              </Grid>
              <Button colored style={{marginTop:'20px', textAlign:'center'}}>Mas Eventos de la UNIQ</Button>
            </div>
        );
    }
}

export default Events;