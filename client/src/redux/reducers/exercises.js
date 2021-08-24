export default (exercises = [], action) => {
  switch (action.type) {
    case 'GET_EXERCISES':
      return action.payload;
    case 'CREATE_EXERCISE':
      return [...exercises, action.payload];
    case 'DELETE_EXERCISE':
      return exercises.filter((exercise) => {
        return exercise._id !== action.payload
      });
    default:
      return exercises;
  }
}