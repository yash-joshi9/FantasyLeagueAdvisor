import cookies from "../cookie/cookie";

const setUser = (payload) => {
    return {
      type: "LOGIN_USER",
      payload
    }
  }

export const getUserById = (id) => async (dispatch) => {
    let url = "http://localhost:3000/users/id"
    const data = {id}
    const token =  cookies.get("authToken")
    try {
        fetch(url, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              'Authorization': `Bearer ${token}`,
              origin: "*"
            },
            body: JSON.stringify(data),
            redirect: 'follow'
          }).then(res => res.json()).then(result => {
            const data = { ...result.user, userId: result.user._id, isLogin: true }
            dispatch(setUser(data))
        }).catch(e => {
              console.log(e,">>>>error")
          })        
    } catch (error) {
        
    }

}