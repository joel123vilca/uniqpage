import React, { Component } from 'react';
import contact from './image/contact.png';
import telefono from './image/telefono.png';
import institucional from './image/institucional.png';
import ubicacion from './image/ubicacion.png';
import youtube from './image/youtube-ico.png';
import directorio from './image/directorio.png';
import facebook from './image/face-ico.png';
import flickr from './image/flickr-ico.png';
import TextField from '@material-ui/core/TextField';

class Contact extends Component {
  render() {
    return(
        <div className="footer">
        <div className="container-footer-all">
            <div className="container-body">
                <div className="colum1">
                    <h1>Universidad Nacional Intercultural de Quillabamba</h1>
                    <div className="row2">
                        <img src={contact}  style={{width: 25, height: 25}} alt="contact"/>
                        <span>info@uniq.edu.pe</span>
                    </div>
                    <div className="row2">
                        <img src={telefono} style={{width: 25, height: 25}}  alt="telefono"/>
                        <span>084 - 282728</span>
                    </div>
                    <div className="row2">
                        <img src={ubicacion} style={{width: 25, height: 25}} alt="ubicacion"/>
                         <span>El Arenal S/N - Quillabamba</span>
                    </div>
                    <div className="row2">
                        <img src={directorio} style={{width: 25, height: 25}} alt="directorio"/>
                         <a className="referencia" href="http://www.uniq.edu.pe/directorioelectronico" target="_bank"><span>Directorio Electrónico</span></a>
                    </div>
                    <div className="row2">
                        <img src={institucional} style={{width: 25, height: 25}} alt="institucional"/>
                        <a className="referencia" target="_bank" href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&hd=uniq.edu.pe&sacu=1&flowName=GlifWebSignIn&flowEntry=AddSession"><span>Correo Institucional</span></a>
                    </div>
                </div>
                <div className="colum2">
                <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
                </div>
                <div className="colum3">
                    <h1>Redes sociales</h1>
                    <div className="row">
                        <img src={facebook} alt="facebook"/>
                        <a className="referencia" target="_bank" href="https://www.facebook.com/uniqquillabamba"><label>Siguenos en Facebook</label></a>
                    </div>
                    <div className="row">
                        <img src={youtube} alt="youtube"/>
                        <label>Siguenos en Youtube</label>
                    </div>
                    <div className="row">
                        <img src={flickr} alt="photos"/>
                        <a className="referencia" target="_bank" href="https://www.flickr.com/photos/155194300@N05/albums"><label>Siguenos en Flicker</label></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default Contact;