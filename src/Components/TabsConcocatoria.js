import React from 'react';

import Tabs from './Tabs';
require('./tab.css');

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ExpandCall from './ExpandCall';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

export default function TabsConvocatoria() {
  return (
    <div>
     <Tabs>
      <div label="Convocatoria 2020">
				<div className="call-number"></div><div className="call-state">ESTADO:</div>
			<Paper style={{width:'95%'}}>
                      <Table  aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}}>Nro</TableCell>
                            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}} >Puesto</TableCell>
                            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}} >Bases</TableCell>
                            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}} >Comunicados</TableCell>
                            <TableCell style={{background:'#376970', color:'white', fontSize: '15px'}}>Aptos</TableCell>
														<TableCell style={{background:'#376970', color:'white', fontSize: '15px'}}>Evaluación Curricular</TableCell>
														<TableCell style={{background:'#376970', color:'white', fontSize: '15px'}}>Finales</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                      
                          {/* <TableRow>
                            <TableCell style={{color:'#376970'}}  component="th" scope="row">
                              PROCESO CAS Nro 001-2020-DCC-CUS/MC
                            </TableCell>
                            <TableCell style={{color:'#376970'}}>ASISTENTE EN ARQUEOLOGIA  - PARQUE ARQUEOLOGICO DE OLLANTAYTAMBO</TableCell>
                            <TableCell style={{color:'#ff2301'}}><PictureAsPdfIcon /></TableCell>
														<TableCell style={{color:'#ff2301'}}><PictureAsPdfIcon /></TableCell>
														<TableCell style={{color:'gray'}}><PictureAsPdfIcon /></TableCell>
														<TableCell style={{color:'gray'}}><PictureAsPdfIcon /></TableCell>
														<TableCell style={{color:'gray'}}><PictureAsPdfIcon /></TableCell>
                          </TableRow> */}
                        </TableBody>
                      </Table>
                    </Paper>
										<br></br>
      </div>
      <div label="Convocatorias Anteriores">
			<ExpandCall></ExpandCall>
      </div>
    </Tabs>
    </div>
  );
}