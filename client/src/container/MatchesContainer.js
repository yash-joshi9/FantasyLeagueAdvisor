import { connect } from "react-redux";
import React, { Component, useEffect, useState } from "react";
import Matches from "../component/matches/matches"
import { bindActionCreators } from "redux"
import cookies from "../cookie/cookie";
import { getUserById } from "../action/dashboard"

function MatchesContainer(props) {

    return (

            <Matches
                {...props}
            />
    );
}



const mapStateToProps = (state) => {
    const {
        user
    } = state
    return {
        ...user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            onGetUserById: getUserById
        },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchesContainer);