import React, { Component } from 'react';
import "./linking.css"; 
import ministerio from '../image/ministerio.png';
import banco from '../image/banco.jpg';
import concytec from '../image/concytec.png';
import dina from '../image/dina.png';
import municipalidad from '../image/municipalidad.png';
import sunedu from '../image/sunedu.jpg';
import universidades from '../image/universidades.jpg';

class Linking extends Component {
    render(){
        return (
          <div className="linking--div">
            <h2 className="linking-title">Enlaces</h2>
            <section className="linking">
              <div className="linking--content">
                <a  target="_blank" href="https://www.gob.pe/minedu">
                  <div className="linking--card">
                    <img 
                      className="linking--image"
                      src={ministerio}
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="linking--content">
                <a  target="_blank" href="https://www.sunedu.gob.pe/">
                  <div className="linking--card">
                    <img 
                      className="linking--image"
                      src={sunedu}
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="linking--content">
                <a  target="_blank" href="http://rpu.edu.pe/">
                  <div className="linking--card">
                    <img 
                      className="linking--image"
                      src={universidades}
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="linking--content">
                <a  target="_blank" href="http://www.munidelaconvencion.gob.pe">
                  <div className="linking--card">
                    <img 
                      className="linking--image"
                      src={municipalidad}
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="linking--content">
                <a  target="_blank" href="https://portal.concytec.gob.pe/">
                  <div className="linking--card">
                    <img 
                      className="linking--image"
                      src={concytec}
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="linking--content">
                <a  target="_blank" href="https://pagalo.pe/">
                  <div className="linking--card">
                    <img 
                      className="linking--image"
                      src={banco}
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="linking--content">
                <a  target="_blank" href="https://dina.concytec.gob.pe/appDirectorioCTI/">
                  <div className="linking--card">
                    <img 
                      className="linking--image"
                      src={dina}
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
            </section>
          </div>
        );
    }
}
export default Linking;