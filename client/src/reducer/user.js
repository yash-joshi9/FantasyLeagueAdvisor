const init = {
    userName: "",
    firstName: "",
    lastName: "",
    userId: ""
}


const User = (state = init, action) => {

    switch(action) {
        case "ADD":
            return state
        default:
            return state
    }
}

export default User;