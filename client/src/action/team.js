import cookies from "../cookie/cookie";

const host = process.env.REACT_APP_REACT_HOST;

const setTeam = (payload) => {
  return {
    type: "SET_TEAM",
    payload,
  };
};

const setPlayer = (payload) => {
  return {
    type: "SET_PLAYER",
    payload,
  };
};

export const getTeamDetailsByName = (teamName) => async (dispatch) => {
  let url = `${host}/teams`;
  const data = { teamName };
  const token = cookies.get("authToken");
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
        origin: "*",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((result) => {
        const data = result[0];
        return dispatch(setTeam(data));
      })
      .catch((e) => {
        console.log(e, ">>>>error");
      });
  } catch (error) {}
};

export const getPlayers = (teamName) => async (dispatch) => {
  let url = `${host}/players`;
  const data = { teamName };
  const token = cookies.get("authToken");
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
        origin: "*",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((result) => {
        return dispatch(setPlayer(result));
      })
      .catch((e) => {
        console.log(e, ">>>>error");
      });
  } catch (error) {}
};
