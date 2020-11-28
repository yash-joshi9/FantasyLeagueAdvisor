import cookies from "../cookie/cookie";

const host = process.env.REACT_APP_REACT_HOST;

const setMatch = (payload) => {
  return {
    type: "SET_MATCH",
    payload,
  };
};


export const getMatchDetails = (teamName) => async (dispatch) => {
  let url = `${host}/matches`;
  const data = { teamName };
  const token = cookies.get("authToken");
  try {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
        origin: "*",
      },
      redirect: "follow",
    })
      .then((res) => res.json())
      .then(async (result) => {
        await dispatch(setMatch(result));
        return
      })
      .catch((e) => {
        console.log(e, ">>>>error");
      });
  } catch (error) {}
};
