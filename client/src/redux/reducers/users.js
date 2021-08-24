const setUser = (state = '612529d1b92de5165ad7b6c2', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

export default setUser;