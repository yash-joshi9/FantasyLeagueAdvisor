import { connect } from "react-redux";
import React, { Component, useEffect, useState } from "react";
import CreateTeam from "../component/createTeam/createTeam"
import { bindActionCreators } from "redux"
import cookies from "../cookie/cookie";
import { getUserById } from "../action/dashboard"

function createTeamContainer(props) {

    return (

            <CreateTeam
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

export default connect(mapStateToProps, mapDispatchToProps)(createTeamContainer);