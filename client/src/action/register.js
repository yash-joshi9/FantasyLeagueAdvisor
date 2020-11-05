import Cookies from 'universal-cookie';
const cookies = new Cookies();
const host = process.env.REACT_APP_REACT_HOST;


export const register = (payload) => {
  return {
      type: "REGISTER_USER",
      payload
  }
}


export const registerUser = (values) => async (dispatch) => {
   
    let url = `${host}/users`
    
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        origin: "*"
      },
      body: JSON.stringify(values),
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(async (result) => {

        if(result.error) {
          return dispatch(register(result.error)) 
        }
        const { token, user } = result;
        const { _id } = user;
        cookies.set('authToken', token);
        cookies.set('userId', _id);

        window.location.href = "/dashboard";
      })
      .catch(error => console.log('error', error));
}


