const recommendation = (state = [], action) => {
    switch (action.type) {
      case 'SET_RECOMMENDATIONS_NEEDED':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default recommendation;