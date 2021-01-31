export const fetchMembers = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_MEMBERS'})
      fetch("http://localhost:3000/members")
        .then(response =>  response.json())
        .then(responseJSON => {
          dispatch({ type: 'ADD_MEMBERS', members: responseJSON })
      })
    }
  }