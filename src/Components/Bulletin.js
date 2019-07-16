import React, { Component } from 'react';
import "./bulletin.css";
import { CardText, Card, CardActions, Button } from 'react-mdl'; 

class Bulletin extends Component {
    render(){
        return (
            <div className="bulletin--div">
                <h2 className="bulletin-title">Boletín Informativo</h2>
            <section className="bulletin">
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '300px', height: '320px'}}>
                    <div className="bulletin--card">
                        <img src="http://www.maluenda.es/public/noticias/99_cursos_informatica.png" className="bulletin--image" alt="imagen uno" />
                        <span className="bulletin--fecha">
                            Junio
                            12
                        </span>
                    </div>
                    <CardText className="bulletin--detail">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border className="bulletin--action">
                        <Button colored>Ver más</Button>
                    </CardActions>
                </Card>
                </div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '300px', height: '320px'}}>
                    <div className="bulletin--card">
                        <img src="http://www.maluenda.es/public/noticias/99_cursos_informatica.png" className="bulletin--image"  alt="imagen dos"/>
                        <span className="bulletin--fecha">
                            Junio
                            12
                        </span>
                    </div>
                    <CardText className="bulletin--detail">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border className="bulletin--action">
                        <Button colored>Ver más</Button>
                    </CardActions>
                </Card>
                </div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '300px', height: '320px'}}>
                    <div className="bulletin--card">
                        <img src="http://www.maluenda.es/public/noticias/99_cursos_informatica.png" className="bulletin--image" alt="imagen tres" />
                        <span className="bulletin--fecha">
                            Junio
                            12
                        </span>
                    </div>
                    <CardText className="bulletin--detail">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border className="bulletin--action">
                        <Button colored>Ver más</Button>
                    </CardActions>
                </Card>
                </div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '300px', height: '320px'}}>
                    <div className="bulletin--card">
                        <img src="http://www.maluenda.es/public/noticias/99_cursos_informatica.png" className="bulletin--image" alt="imagen cuatro" />
                        <span className="bulletin--fecha">
                            Junio
                            12
                        </span>
                    </div>
                    <CardText className="bulletin--detail">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border className="bulletin--action">
                        <Button colored>Ver más</Button>
                    </CardActions>
                </Card>
                </div>
                <div className="bulletin--content">
                <Card shadow={0} style={{width: '300px', height: '320px'}}>
                    <div className="bulletin--card">
                        <img src="http://www.maluenda.es/public/noticias/99_cursos_informatica.png" className="bulletin--image" alt="imagen cinco" />
                        <span className="bulletin--fecha">
                            Junio
                            12
                        </span>
                    </div>
                    <CardText className="bulletin--detail">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border className="bulletin--action">
                        <Button colored>Ver más</Button>
                    </CardActions>
                </Card>
                </div>
            </section>
            </div>
        );
    }
}

export default Bulletin;