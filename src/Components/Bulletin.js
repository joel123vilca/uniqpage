import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import mesapartes from '../image/mesapartes.jpeg';
import { showStories} from '../actions';
import {showEvents, showNovelties, showActivities}from '../actions'

import "./bulletin.css";
import { CardText, Card, CardActions, Button} from 'react-mdl'; 

class Bulletin extends Component {
    componentWillMount() {
        this.props.showStories();
        this.props.showEvents();
        this.props.showNovelties();
        this.props.showActivities()
    }
    render(){
        return (
            <div className="bulletin--div">
                <h2 className="bulletin-two-title">Boletín Informativo</h2>
                <div className="parte-uno">
                <div class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'>
                <div className="gallery-cell">
                { this.props.stories.map((storie,index) => {
                    if(index===0){     
                     return (
                 <div  key={storie.id}>
                  { storie.images.map((image,i) => {
                      if(i === 0){
                        return (
                            <img 
                            key={image.id}
                            src={image.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        )
                      }
                  })}
                <div className="gallery--content">
                    <div>{storie.month} {storie.day}</div>
                    <div><a href={`/actividad/${storie.id}`} className="gallery--link">{storie.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                <div className="gallery-cell">
                { this.props.stories.map((storie,index) => {
                    if(index===1){     
                     return (
                 <div  key={storie.id}>
                  { storie.images.map((image,i) => {
                      if(i === 0){
                        return (
                            <img 
                            key={image.id}
                            src={image.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        )
                      }
                  })}
                 <div className="gallery--content">
                    <div>{storie.month} {storie.day}</div>
                    <div><a href={`/actividad/${storie.id}`} className="gallery--link">{storie.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                <div className="gallery-cell">
                { this.props.stories.map((storie,index) => {
                    if(index===2){     
                     return (
                 <div  key={storie.id}>
                  { storie.images.map((image,i) => {
                      if(i === 0){
                        return (
                            <img 
                            key={image.id}
                            src={image.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        )
                      }
                  })}
                 <div className="gallery--content">
                    <div>{storie.month} {storie.day}</div>
                    <div><a href={`/actividad/${storie.id}`} className="gallery--link">{storie.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                <div className="gallery-cell">
                { this.props.stories.map((storie,index) => {
                    if(index===3){     
                     return (
                 <div  key={storie.id}>
                  { storie.images.map((image,i) => {
                      if(i === 0){
                        return (
                            <img 
                            key={image.id}
                            src={image.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        )
                      }
                  })}
                 <div className="gallery--content">
                    <div>{storie.month} {storie.day}</div>
                    <div><a href={`/actividad/${storie.id}`} className="gallery--link">{storie.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                <div className="gallery-cell">
                { this.props.stories.map((storie,index) => {
                    if(index===4){     
                     return (
                 <div  key={storie.id}>
                  { storie.images.map((image,i) => {
                      if(i === 0){
                        return (
                            <img 
                            key={image.id}
                            src={image.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        )
                      }
                  })}
                 <div className="gallery--content">
                    <div className="gallery--fecha">{storie.month} {storie.day}</div>
                    <div><a href={`/actividad/${storie.id}`} className="gallery--link">{storie.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                </div>
                <h2 className="bulletin-two-title">Eventos</h2>
                <div class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'>
                <div className="gallery-cell">
                { this.props.events.map((evento,index) => {
                    if(index===0){     
                     return (
                 <div  key={evento.id}>
                            <img 
                            src={evento.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        
                <div className="gallery--content">
                    <div></div>
                    <div className="event--title"><a href="#" className="event--link">{evento.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                <div className="gallery-cell">
                { this.props.events.map((evento,index) => {
                    if(index===1){     
                     return (
                 <div  key={evento.id}>
                            <img 
                            src={evento.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        
                <div className="gallery--content">
                    <div></div>
                    <div className="event--title"><a href="#" className="event--link">{evento.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                <div className="gallery-cell">
                { this.props.events.map((evento,index) => {
                    if(index===2){     
                     return (
                 <div  key={evento.id}>
                            <img 
                            src={evento.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        
                <div className="gallery--content">
                    <div></div>
                    <div className="event--title"><a href="#" className="event--link">{evento.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                <div className="gallery-cell">
                { this.props.events.map((evento,index) => {
                    if(index===0){     
                     return (
                 <div  key={evento.id}>
                            <img 
                            src={evento.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        
                <div className="gallery--content">
                    <div></div>
                    <div className="event--title"><a href="#" className="event--link">{evento.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
                <div className="gallery-cell">
                { this.props.events.map((evento,index) => {
                    if(index===1){     
                     return (
                 <div  key={evento.id}>
                            <img 
                            src={evento.image_path}
                            className="gallery--image"
                            alt="imagen uno" 
                            />
                        
                <div className="gallery--content">
                    <div></div>
                    <div className="event--title"><a href="#" className="event--link">{evento.title}</a></div>
                </div>
                </div>
                 )
                    }})}
                </div>
            </div>
            </div>
            <div className="parte-dos">
                <div className="mesa-partes">
                    <img src={mesapartes} style={{width: '100%', }}/>
                </div> 
                <div className="novedades">
                    <div className="novedades-title"><h4>NOVEDADES</h4></div>
                    <div className="novedades-content">
                    { this.props.novelties.map((noveltie,index) => {
                    if(index % 2 == 0){     
                     return (
                        
                    <div className="novedades-list"> {noveltie.title}</div>
                     ) }
                     else{
                        return (
                            <div className="novedades-list-impar">{noveltie.title}</div>
                            )  
                     }
                      })
                    }
                    </div>
                </div>
                <div className="agenda">
                    <div className="agenda-title"><h4>AGENDA</h4></div>
                    <div>
                        <p>
                        <div className="agenda-content">
                            <div className="agenda-date">
                            <span>
                            Jun
                            <br></br>
                            10
                            </span>
                            </div>
                            <div className="agenda-text">
                                Charla sobre cuidado de personal covid
                                <p className="agenda-subtexto">Direccion de Bienestar</p>
                            </div>
                        </div>
                        </p>
                        <p>
                        <div className="agenda-content">
                            <div className="agenda-date">
                            <span>
                            Jun
                            <br></br>
                            10
                            </span>
                            </div>
                            <div className="agenda-text">
                                Charla sobre cuidado de personal covid
                                <p className="agenda-subtexto">Direccion de Bienestar</p>
                            </div>
                        </div>
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      stories: state.storie.lista,
      events: state.events.events,
      novelties: state.novelties.novelties
    }
}

export default connect(mapStateToProps, { showStories,showEvents,showNovelties,showActivities })(Bulletin);