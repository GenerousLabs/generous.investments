import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connectProps, password, setPassword } from 'state';

import config from '../../../config';

const isCorrect = password =>
  config.sitePasswords.includes(password.toLowerCase());

const Password = ({ password, setPassword, children }) => {
  const classes = useStyles();

  if (!isCorrect(password)) {
    return (
      <div className={classes.passwordRoot}>
        <p className={classes.passwordP}>
          Password{' '}
          <input
            type='text'
            onChange={e => {
              setPassword(e.currentTarget.value);
            }}
          />
        </p>
      </div>
    );
  }

  return children;
};

const useStyles = makeStyles(() => ({
  passwordRoot: {
    display: 'flex',
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  passwordP: {
    // flex: 1,
  },
}));

export default connectProps(password, setPassword)(Password);
