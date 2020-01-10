import { handleActions } from 'redux-actions';

import config from '../../config';

import { setName, setPassword, toggleMenu } from './actions';

const reducer = handleActions(
  {
    [setName]: (state, { payload }) => ({
      ...state,
      name: payload,
    }),
    [setPassword]: (state, { payload }) => ({
      ...state,
      password: payload,
    }),
    [toggleMenu]: (state, { payload }) => ({
      ...state,
      open: !state.open,
    }),
  },
  {
    name: config.defaultName,
    password: '',
    open: false,
  } // initial state
);

export default reducer;
