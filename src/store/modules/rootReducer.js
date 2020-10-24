import { combineReducers } from 'redux';

import auth from './auth/reducer';
import themeOptions from './themeOptions/reducer';

export default combineReducers({
  auth,
  themeOptions,
});
