import React, {Component} from 'react';

class Events extends Component{
    render() {
        return (
            <div>
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
                    <div>{evento.start_date} {evento.finish_date}</div>
                    <div className="gallery--title"><a href={`/actividad/${evento.id}`} className="gallery--link">{evento.title}</a></div>
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
            </div>
        );
    }
}

export default Events;