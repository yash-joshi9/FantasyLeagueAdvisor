import { connect } from "react-redux";
import React, { Component, useEffect, useState } from "react";
import Matches from "../component/matches/matches"
import { bindActionCreators } from "redux"
import cookies from "../cookie/cookie";
import { getUserById } from "../action/dashboard"
import { getMatchDetails } from "../action/match"
import Loader from "../component/Loader/Loading";

function MatchesContainer(props) {

    const { onGetMatchDetails, matchDetails } = props;
    const [isLoading, setisLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData() {
            await onGetMatchDetails();
            setisLoading(false)
        }
        fetchData();
      }, [])
    
    return (
        isLoading ?
            <Loader/>
            :
            <Matches
                {...props}
            />
    );
}



const mapStateToProps = (state) => {
    const {
        user,
        match: {
            matchDetails
        }
    } = state
    return {
        ...user,
        matchDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            onGetUserById: getUserById,
            onGetMatchDetails: getMatchDetails
        },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchesContainer);