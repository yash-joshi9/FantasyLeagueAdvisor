import React, { useEffect } from "react";
import "./style.scss";

function PlayerProfile(props) {
  const { item, key, teamId, isMatch, showTeamName } = props;

  return (
    <div key={key} className="player-profile">
      <div
        className={`img-container ${teamId} ${
          item.isCaptain ? "is-captain" : ""
        } ${item.isViceCaptain ? "is-vice-cap" : ""}`}
      >
        <img src={item.url} className="player-img" />
      </div>
      <div className="text">{item.name}</div>
      {showTeamName &&
        <div className="text">Team Name: {teamId}</div>
      }
      {!isMatch && (
        <div className="text-stats">
          {item.stats.split("  ").map((i, key) => (
            <div className="each-stat" key={key}>
              {i}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default PlayerProfile;
