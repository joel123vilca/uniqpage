import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <h2 className="bulletin-title">DATOS DE LA UNIQ</h2>
      <CardContent>
        <Typography variant="h5" component="h2">
          DIRECCIÓN: EL arenal S/N- Prolongación  kumpirushiato / Quillabamba / Cusco
        </Typography>
        <Typography variant="h5" component="h2">
          TELÉFONO: (+51) 084-282728
        </Typography>
        <Typography variant="h5" component="h2">
          CORREO ELECTRONICO: info@uniq.edu.pe
        </Typography>
        <Typography variant="h5" component="h2">
          RUC: 20564325741
        </Typography>
      </CardContent>
    </Card>
  );
}

