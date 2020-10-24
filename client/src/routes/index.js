import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FooterComponent from "../component/Footer/Footer";
import HeaderComponent from "../component/Header/Header"
import SignInContainer from "../container/signInContainer";
import LoginContainer from "../container/LoginContainer";

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
            <HeaderComponent />
                {/* <Route path="/" component={Welcome} exact={true} /> */}
                <Route path="/sign-in" component={SignInContainer} exact={true} />
                <Route path="/login" component={LoginContainer} exact={true} />
            <FooterComponent />
            </BrowserRouter>
        );
    }
}

export default Index;