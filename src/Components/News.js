import React, { Component } from 'react';

class News extends Component {
    render(){
        return (
            <div>
                <h2 className="bulletin-title">Comunicados Oficiales</h2>
                <center>
              <embed src="http://test1.uniq.edu.pe/public/storage/comunicados/comunicado%20sr%20manuel.pdf" width="80%" height="550" />
            </center>
            </div>
        )
    }
}
export default News;