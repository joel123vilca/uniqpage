import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showTeachers } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './teacherList.css';
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

class  TeacherList extends Component {
  componentWillMount() {
    this.props.showTeachers()
  }
  FormRow() {
    return this.props.teachers.map((teacher) => {
      return (
        <Grid item xs={12} md={3} key={teacher.id}  container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp"  style={{magin:20, width:140,height:140}} src={teacher.image_path}  />
            <Typography  variant="subtitle1" className="teacherText" gutterBottom>
                {teacher.name} {teacher.last_name}
            </Typography>
            <Typography  variant="subtitle1" className="teacherText"  gutterBottom>
                {teacher.email}
            </Typography>
        </Grid>
    )
    })
  }
  render(){
    return(
      <div className="root">
        <br></br>
        <Grid container spacing={2}>
        <Grid container item xs={12} md={12} spacing={5}>
        <React.Fragment>
          { this.FormRow()}
        </React.Fragment>
        </Grid>
        </Grid>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    teachers: state.teachers.teachers
  }
}

export default connect(mapStateToProps, { showTeachers })(TeacherList)