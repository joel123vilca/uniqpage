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
  return this.props.calls.map((call) => {
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
                  call.callDocuments.map((document)=>{
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
