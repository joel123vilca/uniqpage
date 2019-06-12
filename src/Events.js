import React, {Component} from 'react';
import {  Grid,  Card, CardTitle, CardActions, Button,CardText } from 'react-mdl';

class Events extends Component{
    render() {
        return (
            <Grid style={{backgroundColor: 'white', height:'400px'}} title="Boletin">
                
                <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '5%'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                        </CardText>
                    <CardActions border>
                    <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '5%'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                        </CardText>
                    <CardActions border>
                    <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '5%'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                        </CardText>
                    <CardActions border>
                    <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
                <Button colored>Mas Eventos de la UNIQ</Button>
            </Grid>
        );
    }
}

export default Events;