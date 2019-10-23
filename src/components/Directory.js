import React, { Component } from 'react'
import DirectoryList from './DirectoryList';
class Directory extends Component {
    render(){
        return (
            <div>
                <center>
                    <embed src="http://test1.uniq.edu.pe/public/storage/directorio/directorio%202019%20actualizado%2003102019.pdf" width="80%" height="550" />
                    <DirectoryList />
                </center>
            </div>
        )
    }
}
export default Directory;