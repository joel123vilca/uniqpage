import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showTeachers } from '../actions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './teacherList.css';
import image from '../image/logo.jpeg';

class  TeacherList extends Component {
  componentWillMount() {
    this.props.showTeachers()
  }
  FormRow() {
    return this.props.teachers.map((teacher) => {
      if(teacher.image_path === null){
        teacher.image_path = image
      }
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