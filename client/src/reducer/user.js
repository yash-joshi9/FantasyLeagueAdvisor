const init = {
    name: "",
    userId: "",
    isArchived: false,
    email: "",
    phoneNumber: "",
    time: "",
    loginError: "",
    setAuth: false
}


const User = (state = init, action) => {

    switch(action.type) {
        case "REGISTER_USER":
            return state
        case "LOGIN_USER":
            return {
                ...state,
                ...action.payload,
                setAuth: true,
                loginError: ""
            }
        case "ERROR_LOGIN":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default User;