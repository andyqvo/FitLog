import { combineReducers } from 'redux';
import setUser from './users/setUser';
import getPrograms from './programs/getPrograms';
import setProgram from './programs/setProgram';

const rootReducer = combineReducers({
  userId: setUser,
  programs: getPrograms,
  programId: setProgram
});


export default rootReducer;