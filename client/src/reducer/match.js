const init = {
    matchDetails: [],
}


const match = (state = init, action) => {


    switch (action.type) {
        case "SET_MATCH":
            return {
                ...state,
                matchDetails: [action.payload]
            }
        default:
            return state
    }
}

export default match;