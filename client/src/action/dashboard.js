




export const getUserById = (id) => async (dipatch) => {
    let url = "http://localhost:3000/users/id"
    const data = {id}
    try {
        fetch(url, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              origin: "*"
            },
            body: JSON.stringify(data),
            redirect: 'follow'
          }).then(res => res.json()).then(result => {
              console.log(result,">>>>>>>>>>>>>>>>res>>>>>>>>")
          }).catch(e => {
              console.log(e,">>>>error")
          })        
    } catch (error) {
        
    }

}