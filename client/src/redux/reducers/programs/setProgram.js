const setProgram = (state = null, action) => {
  switch (action.type) {
    case 'SET_PROGRAM':
      return action.payload;
    default:
      return state;
  }
};

export default setProgram;