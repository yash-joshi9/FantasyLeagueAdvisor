import { connect } from "react-redux";
import React, { Component, useEffect, useState } from "react";
import CreateTeam from "../component/createTeam/createTeam"
import { bindActionCreators } from "redux"
import cookies from "../cookie/cookie";
import { getUserById } from "../action/dashboard"
import { handleSelectedTeam, handleSelectedTeamTwo, getRandomPlayersOfMatch } from "../action/team";

function createTeamContainer(props) {

    return (
        <CreateTeam
            {...props}
        />
    );
}



const mapStateToProps = (state) => {
    const {
        user,
        team: {
            selectedTeam,
            selectedTeam2,
            allTeams,
            fetchedTeam,
            teamError
        },
        team: {
            suggestedTeam
        }
    } = state
    return {
        ...user,
        suggestedTeam,
        selectedTeam,
        selectedTeam2,
        allTeams,
        teamError,
        fetchedTeam
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            onGetUserById: getUserById,
            onHandleSelectedTeam:  handleSelectedTeam,
            onHandleSelectedTeamTwo: handleSelectedTeamTwo,
            onGetRandomPlayersOfMatch: getRandomPlayersOfMatch
        },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(createTeamContainer);