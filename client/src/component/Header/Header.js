import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import LoginSignUpModal from "../login-signup-modal/loginSignUpModal";
import "./style.scss";


function HeaderComponent(props) {
    const handleHome = () => {
        const { history } = props;
        history.push("/");
    }

    const handleSignIn = () => {
        const { history } = props;
        history.push("/sign-up");
    }

    const handleLogin = () => {
        const { history } = props;
        history.push("/login");
    }

    const handleLogout = () => {
        const { onLogout } = props;
        onLogout();
    }


    const { isLogin, onIsShowLoginSignUp, onHandleShowLoginSignUp } = props;

    return (
        <div className="header-main">
            <div className="title-part">
                Dream 11 Advisor
                </div>
            <div className="header-container">
                <div className="logo-part">
                    Dream
                    </div>
                <div className="header-list-part">
                    <div className="first-part-header">
                        <ul className="list-part">
                            <li onClick={handleHome}> Home </li>
                            <li> About Us </li>
                            <li> Help </li>

                        </ul>
                    </div>
                    <div className="sec-part-header">
                        <ul className="list-part">
                            {
                                isLogin ?
                                    <li onClick={handleLogout}> Log Out </li>
                                    :
                                    <Fragment>

                                        <li onClick={() => onHandleShowLoginSignUp(true)}> Login/Sign-Up </li>
                                        <LoginSignUpModal
                                            onIsShowLoginSignUp={onIsShowLoginSignUp}
                                            onHandleShowLoginSignUp={onHandleShowLoginSignUp}
                                        />
                                        {/* <li onClick={handleLogin}> Login </li> */}
                                    </Fragment>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HeaderComponent);
