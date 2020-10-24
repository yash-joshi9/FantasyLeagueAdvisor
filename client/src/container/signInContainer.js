import { connect } from "react-redux";
import React, { Component } from "react";
import SignIn from "../component/SignIn/signIn"
import { bindActionCreators } from "redux"

class SignInContainer extends Component {

    render() {
        return (
            <SignIn
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
        },
        dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SignInContainer);