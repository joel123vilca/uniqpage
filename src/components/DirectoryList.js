import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function DirectoryList() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{background:'#376970', fontSize: '15px'}}>DEPENDENCIA</StyledTableCell>
            <StyledTableCell style={{background:'#376970', fontSize: '15px'}} >CARGO</StyledTableCell>
            <StyledTableCell style={{background:'#376970', fontSize: '15px'}} >CORREO ELECTRONICO DEL AREA</StyledTableCell>
            <StyledTableCell style={{background:'#376970', fontSize: '15px'}} >RESPONSABLE</StyledTableCell>
            <StyledTableCell style={{background:'#376970', fontSize: '15px'}}>CORREO ELECTRONICO DEL RESPONSABLE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell style={{color:'#376970'}}  component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell style={{color:'#376970'}} align="right">{row.calories}</StyledTableCell>
              <StyledTableCell style={{color:'#376970'}} align="right">{row.fat}</StyledTableCell>
              <StyledTableCell style={{color:'#376970'}} align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell style={{color:'#376970'}} align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}