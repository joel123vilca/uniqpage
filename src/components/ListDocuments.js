import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import statuto from '../image/estatuto.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  }
}));


export default function ListDocuments() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList  className={classes.gridList}>
        <GridListTile>
        <img 
            src={statuto}
            alt="status"
            width="100"
            height="500" 
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={statuto}
            alt="status"
            width="100"
            height="500" 
        />
        </GridListTile>
      </GridList>
    </div>
  );
}