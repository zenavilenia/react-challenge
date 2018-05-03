const newsList = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_NEWS':
      return action.payload;
    default:
      return state;
  }
}

export default newsList