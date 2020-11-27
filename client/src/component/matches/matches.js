import React, { Component } from "react";
import "./style.scss";

function Matches(props) {
  
    const { matchDetails } = props;
    return (
        <div className="Matches-container">
            {
                matchDetails[0].map((item, key) => (
                    <div key={key} className="each-match">
                        <div>
                            {item.teamA} Vs {item.teamB}
                        </div>
                        <div>
                            VS
                        </div>
                        <div>
                            {item.matchNumber}
                        </div>
                        <div>
                            {item.venue}
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default Matches;
