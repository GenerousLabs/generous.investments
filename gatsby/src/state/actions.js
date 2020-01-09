import { createAction } from 'redux-actions';

const setPassword = createAction('SET_PASSWORD');
const toggleMenu = createAction('TOGGLE_MENU');

export { setPassword, toggleMenu };
