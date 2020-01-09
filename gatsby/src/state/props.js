import { stateProp, actionProp } from './utils';

import {
  setPassword as setPasswordAction,
  toggleMenu as toggleMenuAction,
} from './actions';

export const password = stateProp(state => ({
  password: state.password,
}));

export const open = stateProp(state => ({
  open: state.open,
}));

export const setPassword = actionProp(dispatch => ({
  setPassword: password => dispatch(setPasswordAction(password)),
}));

export const toggleMenu = actionProp(dispatch => ({
  toggleMenu: () => dispatch(toggleMenuAction()),
}));
