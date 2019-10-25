import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showResponsibilities } from '../actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from './Pagination';
class Directory extends Component {

  constructor() {
    super();
    this.state = {
        exampleItems:[],
        pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  componentWillMount() {
    this.props.showResponsibilities()
  }
  componentWillReceiveProps(props) {
    //var Items = props.responsibilities;
    var Items = [
        {
          id:1,
          email: "Molecule Man"
        },
        {
          id:2,
          email: "Molecule Man"
        },
        {
          id:3,
          email: "Molecule Man"
        },
        {
          id:4,
          email: "Molecule Man"
        },
        {
          id:5,
          email: "Molecule Man"
        },
        {
          id:6,
          email: "Molecule Man"
        },
        {
          id:7,
          email: "Molecule Man"
        },
        {
          id:8,
          email: "Molecule Man"
        },
        {
          id:9,
          email: "Molecule Man"
        },
        {
          id:10,
          email: "Molecule Man"
        },
        {
          id:11,
          email: "Molecule Man"
        }
      ];
    console.log(Items);
    this.setState({ exampleItems: Items });
    
  }
    render(){
        const { responsibilities } = this.props;
        return (
            <div>
                <center>
                    <embed src="http://test1.uniq.edu.pe/public/storage/directorio/directorio%202019%20actualizado%2003102019.pdf" width="80%" height="550" />
                    <Paper style={{width:'80%'}}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}}>DEPENDENCIA</TableCell>
            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}} >CARGO</TableCell>
            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}} >CORREO ELECTRONICO DEL AREA</TableCell>
            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}} >RESPONSABLE</TableCell>
            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}}>CORREO ELECTRONICO DEL RESPONSABLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {responsibilities.map(row => (
            <TableRow>
              <TableCell style={{color:'#376970'}}  component="th" scope="row">
                {row.person_in_charge}
              </TableCell>
              <TableCell style={{color:'#376970'}}>{row.email}</TableCell>
              <TableCell style={{color:'#376970'}}>hola</TableCell>
              <TableCell style={{color:'#376970'}}>hola</TableCell>
              <TableCell style={{color:'#376970'}}>hola</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
                
                {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.email}</div>
                        )}
                <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                </center>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      responsibilities: state.responsibilities.responsibilities
    }
}
export default connect(mapStateToProps, { showResponsibilities })(Directory);