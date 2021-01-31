const reducer = (state = { members: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_MEMBERS':
        return {
          ...state,
          members: [...state.members],
          loading: true
        }
      case 'ADD_MEMBERS':
        return {
          ...state,
          members: action.members,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default reducer;