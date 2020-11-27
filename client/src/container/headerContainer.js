import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux"
import Header from "../component/Header/Header";
import { withRouter } from "react-router"
import { logout } from "../action/login"
import { handleShowLoginSignUp } from "../action/dashboard";
import { getTeamDetailsByName } from "../action/team";



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
        },
        dashboard: {
            onIsShowLoginSignUp
        }
    } = state
    return {
        onIsShowLoginSignUp,
        isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            onLogout: logout,
            onHandleShowLoginSignUp: handleShowLoginSignUp,
            onGetTeamDetailsByName: getTeamDetailsByName
        },
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderContainer));