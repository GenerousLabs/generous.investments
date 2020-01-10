import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';

import config from '../../../config';

import { setName, setPassword } from 'state/actions';

const isLocked = ({ name, password }) => {
  if (name !== config.defaultName) {
    return false;
  }
  if (isCorrectPassword(password)) {
    return false;
  }
  return true;
};

const isCorrectPassword = password =>
  config.sitePasswords.includes(password.toLowerCase());

const decodeName = hash => atob(decodeURIComponent(hash));
const encodeName = name => encodeURIComponent(btoa(name));

global.__setName = () => {
  global.location.hash = encodeName(global.prompt('Enter a name'));
};

const Password = ({ children }) => {
  const name = useSelector(({ name }) => name);
  const password = useSelector(({ password }) => password);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (global.location.hash !== '') {
      dispatch(setName(decodeName(global.location.hash.substr(1))));
    }
  }, [dispatch]);

  if (isLocked({ name, password })) {
    return (
      <div className={classes.passwordRoot}>
        <p className={classes.passwordP}>
          Password{' '}
          <input
            type='text'
            onChange={e => {
              dispatch(setPassword(e.currentTarget.value));
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

export default Password;
