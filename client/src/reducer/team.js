const init = {
    details: [],
    players: []
}


const team = (state = init, action) => {


    switch (action.type) {
        case "SET_TEAM":
            return {
                ...state,
                details: [action.payload]
            }
        case "SET_PLAYER":
            return {
                ...state,
                players: [action.payload]
            }
        default:
            return state
    }
}

export default team;