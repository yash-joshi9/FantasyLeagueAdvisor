import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux"
import Header from "../component/Header/Header";
import { withRouter } from "react-router"
import { logout } from "../action/login"

class HeaderContainer extends Component {

    render() {
        return (
            <Header
                {...this.props}
            />
        );
    }
}



const mapStateToProps = (state) => {
    const {
        user: {
            isLogin
        }
    } = state
    return {
        isLogin
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        ownProps,
        ...bindActionCreators({
            onLogout: logout
        },
            dispatch, ownProps)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderContainer));