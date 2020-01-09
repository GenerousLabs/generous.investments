import { handleActions } from 'redux-actions';

import { setPassword, toggleMenu } from './actions';

const reducer = handleActions(
  {
    [setPassword]: (state, { payload }) => ({
      password: payload,
    }),
    [toggleMenu]: (state, { payload }) => ({
      open: !state.open,
    }),
  },
  {
    password: '',
    open: false,
  } // initial state
);

export default reducer;
