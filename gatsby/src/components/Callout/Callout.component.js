import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import Red from '@material-ui/core/colors/red';

const Callout = ({ children }) => {
  return (
    <Paper style={{ padding: 20, backgroundColor: Red[50] }} elevation={3}>
      <Typography>{children}</Typography>
    </Paper>
  );
};

export default Callout;
