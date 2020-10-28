import { connect } from "react-redux";
import React, { Component, useEffect } from "react";
import Dashboard from "../component/dashboard/dashboard"
import { bindActionCreators } from "redux"
import cookies from "../cookie/cookie";
import { getUserById } from "../action/dashboard"

function DashboardContainer(props) {

    useEffect(() => {
        const { onGetUserById } = props;
        const userId = cookies.get("userId");
        onGetUserById(userId);
    }, [])

    return (
        <Dashboard
            {...props}
        // initialValues={{
        //     firstName: "abcd"
        // }}
        />
    );
}



const mapStateToProps = (state) => {
    const {
        User
    } = state
    return {
        User
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);