import { connect } from "react-redux";
import React, { Component, useEffect, useState } from "react";
import Matches from "../component/matches/matches";
import { bindActionCreators } from "redux";
import cookies from "../cookie/cookie";
import { getUserById } from "../action/dashboard";
import { getMatchDetails } from "../action/match";
import Loader from "../component/Loader/Loading";
import { getTeamCaptain } from "../action/team";

function MatchesContainer(props) {
  const { onGetMatchDetails, onGetTeamCaptain, matchDetails, captain } = props;
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if(!matchDetails.length) {
      async function fetchData() {
        await onGetMatchDetails();
      }
      fetchData();
      // await onGetTeamCaptain("csk")
      // await onGetTeamCaptain("mi")
    }
    setisLoading(false);
  }, []);
  
  useEffect(() => {
    if(matchDetails.length && captain.length < 2) {
      async function fetchData() {
        const { teamA, teamB } = matchDetails[0];
        await onGetTeamCaptain(teamA)
        await onGetTeamCaptain(teamB)
      }
      fetchData();
    }
    setisLoading(false);
  }, [matchDetails]);
  
  // useEffect(() => {
  //   async function fetchData() {
  //     if (matchDetails.length) {
  //       matchDetails.filter(async (i) => {
  //         await onGetTeamCaptain(i.teamA, i.teamB);
  //       });
  //     }
  //   }
  //   fetchData();
  // }, [matchDetails]);

  return isLoading ? <Loader /> : <Matches {...props} />;
}

const mapStateToProps = (state) => {
  const {
    user,
    match: {
      matchDetails
    },
    team,
  } = state;
  return {
    ...user,
    matchDetails,
    ...team,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      {
        onGetUserById: getUserById,
        onGetMatchDetails: getMatchDetails,
        onGetTeamCaptain: getTeamCaptain,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchesContainer);
