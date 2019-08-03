import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

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
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h4"  gutterBottom>CONVOCATORIA CAS  Nº 002-2019-UNIQ</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            cargando...
          </Typography>
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
            cargando...
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}