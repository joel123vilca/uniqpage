import React, { Component } from 'react';
import {Card, CardText, CardActions, Icon} from 'react-mdl';

class Activities extends Component {
    render(){
        return (
            <section className="bulletin">
                <Card shadow={0} style={{width: '256px', height: '130px'}}>
                <CardText expand style={{textAlign: 'justify', color: 'black'}}>
                    <h5 style={{marginTop: '1px'}}>
                        Convocatoria | Bolsa de Prácticas del Consejo Empresarial de la Alianza del Pacífico.
                    </h5>
                </CardText>
                <br></br>
                <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff', background:'green'}}>
                    May 24, 2016
                <div className="mdl-layout-spacer"></div>
                <Icon name="event" />
                </CardActions>
                </Card>
                <Card shadow={0} style={{width: '256px', height: '130px'}}>
                <CardText expand style={{textAlign: 'justify', color: 'black'}}>
                    <h5 style={{marginTop: '1px'}}>
                        Convocatoria | Bolsa de Prácticas del Consejo Empresarial de la Alianza del Pacífico.
                    </h5>
                </CardText>
                <br></br>
                <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff', background:'green'}}>
                    May 24, 2016
                <div className="mdl-layout-spacer"></div>
                <Icon name="event" />
                </CardActions>
                </Card>
            </section>
        );
    }
}
export default Activities;