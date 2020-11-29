import React, { Component } from "react";
import "./style.scss";
import PlayerProfile from "../teams/playerProfile";

function Matches(props) {
  const { matchDetails, captain } = props;

  return (
    <div className="Matches-container">
      {matchDetails.map((item, key) => (
        <div key={key} className="each-match">
          <div className="captains-profile">
            {captain.map((item, key) => (
              <PlayerProfile
                key={key}
                item={item}
                teamId={item.team}
                showTeamName={true}
                isMatch={true}
              />
            ))}
          </div>
          <div className="match-number">{item.matchNumber}</div>
          <div className="match-venue">{item.venue}</div>
        </div>
      ))}
    </div>
  );
}

export default Matches;
