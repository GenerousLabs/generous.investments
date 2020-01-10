import React from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';
import Grey from '@material-ui/core/colors/grey';

const Callout = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography align='center'>{children}</Typography>
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: Grey[100],
  },
}));

export default Callout;
