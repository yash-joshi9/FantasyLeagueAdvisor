const init = {
  details: [],
  players: [],
  captain: [],
  selectedTeam: "Teams",
  selectedTeam2: "Teams",
  allTeams: [
    "Delhi Capitals",
    "Kings XI Punjab",
    "Kolkata Knight Riders",
    "Mumbai Indians",
    "Rajasthan Royals",
    "Royal Challengers Bangalore",
    "Sunrisers Hyderabad",
    "Chennai Super Kings",
  ],
  fetchedTeam: [
    "Delhi Capitals",
    "Kings XI Punjab",
    "Kolkata Knight Riders",
    "Mumbai Indians",
    "Rajasthan Royals",
    "Royal Challengers Bangalore",
    "Sunrisers Hyderabad",
    "Chennai Super Kings",
  ],
  suggestedTeam: [],
  teamError: "",
};

const team = (state = init, action) => {
  switch (action.type) {
    case "SET_TEAM":
      return {
        ...state,
        details: [action.payload],
      };
    case "SET_PLAYER":
      return {
        ...state,
        players: [action.payload],
      };
    case "SET_CAPTAIN":
      return {
        ...state,
        captain: [...state.captain, ...action.payload],
      };
    case "SET_SELECTEDTEAM":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_SUGGESTEDTEAM":
      return {
        ...state,
        suggestedTeam: [action.payload],
      };
    case "TEAM_ERROR":
      return {
        ...state,
        teamError: action.payload,
      };
    default:
      return state;
  }
};

export default team;
