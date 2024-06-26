import { combineReducers } from 'redux';

import signupReducer from './signupReducer';

export default combineReducers({

  // all reduers go here
  // don't forget to import them as well
  signupReducer: signupReducer,

});