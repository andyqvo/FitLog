const setUser = (state = '612529d1b92de5165ad7b6c2', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({...action?.data}));
      return {...state, authData: action?.data};
    case 'LOGOUT':
      localStorage.clear();
      return {...state, authData: null};
    default:
      return state;
  }
}
export default authReducer;