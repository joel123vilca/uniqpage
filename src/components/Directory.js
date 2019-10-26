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
    var Items = props.responsibilities;
    this.setState({ exampleItems: Items });
    
  }
    render(){
        return (
            <div>
              <div style={{marginTop: '5%', paddingInline:'10%'}}>
                <h2 className="bulletin-title">Directorio Institucional - UNIQ</h2>
              </div>
                <center>
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
                        {this.state.pageOfItems.map(row => (
                          <TableRow>
                            <TableCell style={{color:'#376970'}}  component="th" scope="row">
                              {row.office.title}
                            </TableCell>
                            <TableCell style={{color:'#376970'}}>{row.position.title}</TableCell>
                            <TableCell style={{color:'#376970'}}>{row.office.email}</TableCell>
                            <TableCell style={{color:'#376970'}}>{row.person_in_charge}</TableCell>
                            <TableCell style={{color:'#376970'}}>{row.email}</TableCell>
                          </TableRow>
                        ))}
                        </TableBody>
                      </Table>
                    </Paper>
                    <br></br>
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