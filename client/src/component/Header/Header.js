import React, { Component } from "react";
import { withRouter } from "react-router";
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
                            <li onClick={handleSignIn}> Sign-Up </li>
                            <li onClick={handleLogin}> Login </li>
                            <li> Log Out </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HeaderComponent);
