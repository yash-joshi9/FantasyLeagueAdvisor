import React, { useEffect } from "react";
import "./style.scss";
import PlayerProfile from "./playerProfile";

function Teams(props) {
  const { details, onGetPlayers, players} = props;
  const team = details[0];

  const { teamId, name, coach, owner, venue, captain, winners } = team;


  useEffect(() => {
    async function fetchData() {
      await onGetPlayers(teamId);
    }
    fetchData();
  }, [teamId]);

  const player = players[0];


  return (
    <div className="teams-section">
      <div className={`team-intro-main ${teamId}`}>
        <div className={`background-seprator  ${teamId}`}>
          <div className="container">
            <div className="team-name">{name}</div>
            {winners.length ? <div className="winner">{winners}</div> : ""}
            <div className="team-details">
              <div className="item-values">
                Owner:
                <span>{owner}</span>
              </div>
              <div className="item-values">
                Venue:
                <span>{venue}</span>
              </div>
            </div>
            <div className="team-details">
              <div className="item-values">
                Coach:
                <span>{coach}</span>
              </div>
              <div className="item-values">
                Captain:
                <span>{captain}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading-team">
        Squad
      </div>
      <div className="teams-squad">
        {
          players.length &&
          player.map((item, key) => (
            <PlayerProfile 
              key={key}
              item={item}
              teamId={teamId}
              isMatch={false}
            />
            // <div key={key} className="player-profile">
            //       <div className={`img-container ${teamId} ${item.isCaptain ? "is-captain" : ""}`}>
            //         <img src={item.url} className="player-img"/>
            //       </div>    
            //       <div className="text">
            //         {item.name}
            //       </div>    
            //       <div className="text-stats">
            //         {
            //           item.stats.split("  ").map((i, key) => (
            //           <div className="each-stat" key={key}>{i}</div>
            //           )) 
            //         }
            //       </div> 
            // </div>
          )) 

        }
      </div>
    </div>
  );
}
export default Teams;
