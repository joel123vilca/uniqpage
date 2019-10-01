import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCalls } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import FolderIcon from '@material-ui/icons/Folder';
import classes from './expandcall.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'center'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    textAlign: 'center'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ocis = [ 
  { id:1,title:'ACCION SIMULTANEA', data:[
    {
      id:1,
      title:'Acción simultanea 1',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ACCION%20SIMULTANEA/AS-001.pdf'
    },
    {
      id:2,
      title:'Acción simultanea 2',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ACCION%20SIMULTANEA/AS-002.pdf'
    },
    {
      id:3,
      title:'Acción simultanea 3',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ACCION%20SIMULTANEA/AS-003.pdf'
    }
  ]},
  { id:2,title:'ORIENTACION DE OFICIO', data:[
  {
    id:1,
    title:'Orientación de oficio 1',
    file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/O.O_1.pdf'
    },
    {
      id:2,
      title:'Orientación de oficio 2',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/OO_2.pdf'
    },
    {
      id:3,
      title:'Orientación de oficio 3',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/OO_3.pdf'
    },
    {
      id:4,
      title:'Orientación de oficio 4',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/O.O_4.pdf'
    },
    {
      id:5,
      title:'Orientación de oficio 5',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/O.O_5.pdf'
    },
    {
      id:6,
      title:'Orientación de oficio 6',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/O.O_6.pdf'
    },
    {
      id:7,
      title:'Orientación de oficio 7',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/O.O_7.pdf'
    },
    {
      id:8,
      title:'Orientación de oficio 8',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/O.O.8.PDF'
    },
    {
      id:9,
      title:'Orientación de oficio 9',
      file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/ORIENTACION%20DE%20OFICIO/O.O.9.PDF'
    },
]},
{ id:3,title:'VISITA DE CONTROL', data:[
  {
    id:1,
    title:'Visita de control 1',
    file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/VISITA%20DE%20CONTROL/VC_1.pdf'
  },
  {
    id:2,
    title:'Visita de control 2',
    file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/VISITA%20DE%20CONTROL/VC_2.pdf'
  },
  {
    id:3,
    title:'Visita de control 3',
    file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/VISITA%20DE%20CONTROL/VC_3.pdf'
  },
  {
    id:4,
    title:'Visita de control 4',
    file_path:'http://test1.uniq.edu.pe/public/SCANER%20SER.CONTROL%20SIMULTANEO-2018/VISITA%20DE%20CONTROL/VC_4.pdf'
  }
]}
]

class Oci extends Component {
  state = {
    panel: true
  }
  componentWillMount() {
    this.props.showCalls()
  };
  handleChange = e => {
    this.setState({
     panel: false
   });
 };
 renderCallList (){
  return ocis.map((call) => {
    return (
      <ExpansionPanel 
          key={call.id}
          panel={this.state.panel} 
          onChange={this.handleChange}>
          <ExpansionPanelSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h4"  gutterBottom>{call.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            </Typography>
            <div className={classes.demo}>
              <List>
                {
                  call.data.map((document)=>{
                    return(
                      <ListItem key={document.id}>
                        <ListItemAvatar>
                          <Avatar>
                            <FolderIcon />
                         </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={document.title}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" target="_blank" href={document.file_path}>
                            <Icon color="primary">cloud_download</Icon>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                  }) 
                }
              </List>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    )
  })
  };

  render(){
    return (
      <div className={classes.root}>
        {this.renderCallList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.calls.calls);
  return {
    calls: state.calls.calls
  }
}

export default connect(mapStateToProps, { showCalls })(Oci);
