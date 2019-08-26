import React from 'react';
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

export default function ExpandCall() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h4"  gutterBottom>CONVOCATORIA PARA EL ARRENDAMIENTO DEL CAFETÍN </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="BASES DE LA CONVOCATORIA"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" target="_blank" href="http://test1.uniq.edu.pe/public/storage/convocatoria/BASES%20CONVOCA.%20CFETIN_1.pdf">
                      <Icon color="primary">cloud_download</Icon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="CRONOGRAMA DE LA CONVOCATORIA"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" target="_blank" href="http://test1.uniq.edu.pe/public/storage/convocatoria/PARA%20PUBLICACION%20CONVOCATORIA_1.pdf">
                      <Icon color="primary">cloud_download</Icon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h4"  gutterBottom>CONVOCATORIA CAS  Nº 002-2019-UNIQ</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="ACTA DE RESULTADOS FINALES"
                    secondary="10/10/2019"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" href="https://material-ui.com/es/components/lists/">
                      <Icon color="primary">cloud_download</Icon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h4"  gutterBottom>CONVOCATORIA CAS Nº 001-2019-UNIQ</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="ACTA DE RESULTADOS FINALES"
                    secondary="10/10/2019"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" href="https://material-ui.com/es/components/lists/">
                      <Icon color="primary">cloud_download</Icon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}