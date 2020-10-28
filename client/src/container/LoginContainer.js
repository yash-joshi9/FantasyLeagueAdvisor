import { connect } from "react-redux";
import React, { Component } from "react";
import Login from "../component/Login/login"
import { bindActionCreators } from "redux"
import { loginUser } from "../action/login"
import { withRouter } from "react-router"


class LoginContainer extends Component {

    render() {
        return (
            <Login
                {...this.props}
            // initialValues={{
            //     firstName: "abcd"
            // }}
            />
        );
    }
}



const mapStateToProps = (state) => {
    const {
        User: {
            loginError
        }
    } = state
    return {
        loginError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        ownProps,
        ...bindActionCreators({
            onHandleLoginUser: loginUser
        },
            dispatch, ownProps)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));