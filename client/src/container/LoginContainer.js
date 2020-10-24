import { connect } from "react-redux";
import React, { Component } from "react";
import Login from "../component/Login/login"
import { bindActionCreators } from "redux"
import { handleLogin } from "../action/login"

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
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({ 
            handleLogin: handleLogin
        },
        dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer);