const getPrograms = (state = [], action) => {
  switch (action.type) {
    case 'GET_PROGRAMS':
      return action.payload;
    default:
      return state;
  }
};

export default getPrograms;