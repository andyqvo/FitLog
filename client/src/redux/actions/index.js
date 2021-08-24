export const setUser = (userId) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_USER',
      payload: userId
    })
  }
};