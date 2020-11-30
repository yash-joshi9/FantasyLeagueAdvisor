import React, { Component, useEffect, useState } from "react";
import "./style.scss";
import MatchesContainer from "../../container/MatchesContainer";
import DropDown from "../dropdown/dropdown";
import PlayerProfile from "../teams/playerProfile";

function CreateTeam(props) {
  const {
    onHandleSelectedTeam,
    onHandleSelectedTeamTwo,
    selectedTeam,
    selectedTeam2,
    onGetRandomPlayersOfMatch,
    fetchedTeam,
    suggestedTeam,
    teamError,
  } = props;

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [error, seterror] = useState("");

  const handleSelectedTeam = async (e) => {
    const teamName = e.currentTarget.textContent;
    setTeam1(teamName)
    await onHandleSelectedTeam(teamName, team2);
  };

  const handleSelectedTeamTwo = async (e) => {
    const teamName = e.currentTarget.textContent;
    setTeam2(teamName)
    await onHandleSelectedTeamTwo(teamName, team1);
  };

  const handleButton = () => {
    if (!team1.length || !team2.length) {
      seterror("Please select two teams");
      return;
    }
    onGetRandomPlayersOfMatch();
  };
  return (
    <div className="create-team-section">
      <div className="container-img" />
      <div className="container-create-team">
        <div className="team-create-wapper">
          <div className="display-container-team">
            <div className="banner">
              To view our suggestions select the matches
            </div>
            <div className="create-team-dropdown">
              <div className="dropdown drop-1">
                <DropDown name={selectedTeam}>
                  <ul>
                    {fetchedTeam.map((item, key) => (
                      <li key={key}>
                        <div onClick={(e) => handleSelectedTeam(e)}>{item}</div>
                      </li>
                    ))}
                  </ul>
                </DropDown>
              </div>
              <div className="dropdown drop-2">
                <DropDown name={selectedTeam2}>
                  <ul>
                    {fetchedTeam.map((item, key) => (
                      <li key={key}>
                        <div onClick={(e) => handleSelectedTeamTwo(e)}>
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>
                </DropDown>
              </div>
            </div>
            <div className="error-tag">{error && error}</div>
            <div className="button-wapper">
              <button className="button-click" onClick={handleButton}>
                Submit
              </button>
            </div>
          </div>
          <div className="match-data">
            <div>Upcoming Matches</div>
            <MatchesContainer />
          </div>
        </div>
        <div className="suggested Team">
          <div>The suggested team will lead you to earn more profit on betting website .</div>
          <div className =" profit">
          Suggested Team
           </div>
            <div className="suggested-container">
            {suggestedTeam[0] &&
              suggestedTeam[0].map((item, key) => (
                <PlayerProfile
                  key={key}
                  item={item}
                  teamId={item.team}
                  isMatch={true}
                />
              ))}
          </div>

          <div className="error-tag">
            <strong>{teamError && teamError}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTeam;
