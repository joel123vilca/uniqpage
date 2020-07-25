import React, { Component } from 'react';
import "./Buscado.css";
import bolsa from '../image/bolsa-de-trabajo.png';
import academico from '../image/sistema-academico.png';
import investigacion from '../image/repo-investigacion.png';
import resolucion from '../image/resolucion.png';
import revista from '../image/revista-cientifica.png';
import biblioteca from '../image/sistema-biblioteca.png';
import normativas from '../image/normativas-academicas.png';
import mesa from '../image/mesa-de-partes.png';
import documentos from '../image/documento-de-gestion.png';
import cotizacion from '../image/cotizacion.png';
import convocatoria from '../image/convocatoria-personal.png';

class Buscado extends Component {
	render(){
		return(
			<div className="buscado--content">
					<h4>LO MÁS BUSCADO</h4>
				<div className="buscado--links">
					<div>
						<a href="http://181.224.238.133"><img
         			className="buscado--image"
         			src={academico}
         			alt="bolsa"
       			/></a>
						 <p>Sistema academico</p>
			 		</div>
					 <div>
						<a href="http://181.224.238.132/moodle/"><img
         			className="buscado--image"
         			src={bolsa}
         			alt="bolsa"
       			/></a>
						 <p>Aula Virtual</p>
			 		</div>
					 <div>
						<a href="http://biblioteca.uniq.edu.pe"><img
         			className="buscado--image"
         			src={biblioteca}
         			alt="bolsa"
       			/></a>
						<p>Sistema de Biblioteca</p>
			 		</div>
					 <div>
						<a href="#"><img
         			className="buscado--image"
         			src={normativas}
         			alt="bolsa"
       			/></a>
						 <p>Normativas academicas</p>
			 		</div>
					 <div>
						<a href="http://bienestar.uniq.edu.pe/bienestar"><img
         			className="buscado--image"
         			src={bolsa}
         			alt="bolsa"
       			/></a>
						 <p>Ficha Socioeconomica</p>
			 		</div>
					 <div>
						<a href="/resoluciones"><img
         			className="buscado--image"
         			src={resolucion}
         			alt="bolsa"
       			/></a>
						<p>Resoluciones</p>
			 		</div>
					 <div>
						<a href="#"><img
         			className="buscado--image"
         			src={cotizacion}
         			alt="bolsa"
       			/></a>
						 <p>Cotizaciones</p>
			 		</div>
					 <div>
						<a href="http://repositorio.uniq.edu.pe/"><img
         			className="buscado--image"
         			src={investigacion}
         			alt="bolsa"
       			/></a>
						 <p>Repositorio de investigación</p>
			 		</div>
					 <div>
						<a href="http://repositorio.uniq.edu.pe/"><img
         			className="buscado--image"
         			src={revista}
         			alt="bolsa"
       			/></a>
						 <p>Revista Cientifica</p>
			 		</div>
					 <div>
						<a href="#"><img
         			className="buscado--image"
         			src={bolsa}
         			alt="bolsa"
       			/></a>
						 <p>Bolsa de Trabajo</p>
			 		</div>
					 <div>
						<a href="/convocatorias"><img
         			className="buscado--image"
         			src={convocatoria}
         			alt="bolsa"
       			/></a>
						 <p>Convocatorias Personal</p>
			 		</div>
					 <div>
						<a href="#"><img
         			className="buscado--image"
         			src={bolsa}
         			alt="bolsa"
       			/></a>
						 <p>Estatuto Uniq</p>
			 		</div>
					 <div>
						<a href="#"><img
         			className="buscado--image"
         			src={bolsa}
         			alt="bolsa"
       			/></a>
						<p>Directorio</p>
			 		</div>
					 <div>
						<a href="#"><img
         			className="buscado--image"
         			src={mesa}
         			alt="bolsa"
       			/></a>
						<p>Mesa de partes</p>
			 		</div>
					 <div>
						<a href="#"><img
         			className="buscado--image"
         			src={documentos}
         			alt="bolsa"
       			/></a>
						 <p>Documentos de Gestion</p>
			 		</div>
				</div>
				
			 
			</div>
		)
	}
}
export default Buscado;