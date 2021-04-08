const launchesReducer = (state = {
    launches: [],
    loading: false
}, action) => {
    switch(action.type) {
        case 'LOADING_LAUNCHES':
            return {
                ...state, launches: [...state.launches], loading: true
            }
        case 'ADD_LAUNCHES':
            return {
                ...state, launches: action.launches, loading: false
            }
        default: 
            return state;
    }
}

export default launchesReducer;