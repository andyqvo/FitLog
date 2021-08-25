import { combineReducers } from 'redux';
// import setUser from './users';
import auth from './users';
import programs from './programs';
import exercises from './exercises';

const rootReducer = combineReducers({
  // userId: setUser,
  programs,
  exercises,
  auth
});


export default rootReducer;