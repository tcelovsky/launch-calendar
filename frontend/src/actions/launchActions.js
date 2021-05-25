const BASE_URL = "https://launch-calendar.herokuapp.com"
const LAUNCHES_URL = `${BASE_URL}/launches`

export const fetchLaunches = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_LAUNCHES'})
      fetch(LAUNCHES_URL)
        .then(response => {
          return response.json()
        })
        .then(responseJSON => {
          dispatch({ type: 'ADD_LAUNCHES', launches: responseJSON })
        })
    }
  }