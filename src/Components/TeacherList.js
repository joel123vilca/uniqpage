import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import image from '../image/fondo.jpeg';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#1c3643',
    color: '#F8FAFF',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
  teacherText:{
    margin:10,
    textAlign: 'center'
  },
}));

export default function TeacherList() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3} container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />
            <Typography className={classes.teacherText} variant="subtitle1" gutterBottom>
                AUGUSTO PUMACHAUCA PUMACHAUCALLA
            </Typography>
            <Typography className={classes.teacherText} variant="subtitle1" gutterBottom>
                Docente asociado Tiempo completo augusto.pumachauca@uniq.edu.pe
            </Typography>
        </Grid>
        <Grid item xs={3} container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />
            <Typography className={classes.teacherText} variant="subtitle1" gutterBottom>
                AUGUSTO PUMACHAUCA PUMACHAUCALLA
            </Typography>
            <Typography className={classes.teacherText} variant="subtitle1" gutterBottom>
                Docente asociado Tiempo completo augusto.pumachauca@uniq.edu.pe
            </Typography>
        </Grid>
        <Grid item xs={3} container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />
            <Typography className={classes.teacherText} variant="subtitle1" gutterBottom>
                AUGUSTO PUMACHAUCA PUMACHAUCALLA
            </Typography>
            <Typography className={classes.teacherText} variant="subtitle1" gutterBottom>
                Docente asociado Tiempo completo augusto.pumachauca@uniq.edu.pe
            </Typography>
        </Grid>
        <Grid item xs={3} container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />
            <Typography className={classes.teacherText} variant="subtitle1" gutterBottom>
                AUGUSTO PUMACHAUCA PUMACHAUCALLA
            </Typography>
            <Typography className={classes.teacherText} variant="subtitle1" gutterBottom>
                Docente asociado Tiempo completo augusto.pumachauca@uniq.edu.pe
            </Typography>
        </Grid> 
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}