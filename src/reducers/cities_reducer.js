const citiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  // switch statement used for reducers often, same as if else statement in functionality
  // ie.
  // if (action.type === 'SET_CITIES) {
    // return action.payload;
  // } else {
    // return state;
  // }
  
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;