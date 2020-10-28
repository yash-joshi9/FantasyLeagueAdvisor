import { loginUser } from "./login";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export const register = (payload) => {
  return {
      type: "REGISTER_USER",
      payload
  }
}


export const registerUser = (values) => async (dispatch) => {
   
    let url = "http://localhost:3000/users"
    
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
        console.log(result)
        const { token, user } = result;
        const { name, password } = user;
        cookies.set('authToken', token);
        loginUser({name, password});
      })
      .catch(error => console.log('error', error));


}


