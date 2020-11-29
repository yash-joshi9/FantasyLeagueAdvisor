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

const setCaptain = (payload) => {
  return {
    type: "SET_CAPTAIN",
    payload,
  };
};

const setSelectedTeam = (payload) => {
  return {
    type: "SET_SELECTEDTEAM",
    payload,
  };
};

const setSuggestedTeam = (payload) => {
  return {
    type: "SET_SUGGESTEDTEAM",
    payload,
  };
};


const setError = (payload) => {
  return {
    type: "TEAM_ERROR",
    payload,
  };
};

const setLoading = (payload) => {
  return {
    type: "TEAM_LOADING",
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

export const getTeamCaptain = (teamName) => async (dispatch) => {
  let url = `${host}/players/name`;

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
        return dispatch(setCaptain(result));
      })
      .catch((e) => {
        console.log(e, ">>>>error");
      });
  } catch (error) {}
};

export const getRandomPlayersOfMatch = (teamName) => async (
  dispatch,
  getState
) => {
  let url = `${host}/players/suggest`;

  const {
    user: {_id},
    team: { selectedTeam, selectedTeam2 },
  } = getState();

  const data = {_id, teamA: selectedTeam, teamB: selectedTeam2 };
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
        if (result.error) {
          return dispatch(setError(result.error));
        }
        return dispatch(setSuggestedTeam(result));
      })
      .catch((e) => {
        console.log(e, ">>>>error");
      });
  } catch (error) {}
};

export const handleSelectedTeam = (team) => (dispatch, getState) => {
  const {
    team: { allTeams },
  } = getState();

  const newTeam = allTeams.filter((i) => {
    return i !== team;
  });

  return dispatch(
    setSelectedTeam({ selectedTeam: team, fetchedTeam: newTeam })
  );
};

export const handleSelectedTeamTwo = (team) => (dispatch, getState) => {
  const {
    team: { allTeams },
  } = getState();

  const newTeam = allTeams.filter((i) => {
    return i !== team;
  });

  return dispatch(
    setSelectedTeam({ selectedTeam2: team, fetchedTeam: newTeam })
  );
};
