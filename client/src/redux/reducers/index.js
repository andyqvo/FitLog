import { combineReducers } from 'redux';
import setUser from './users/setUser';
import getPrograms from './programs/getPrograms';

const rootReducer = combineReducers({
  userId: setUser,
  programs: getPrograms
});


export default rootReducer;