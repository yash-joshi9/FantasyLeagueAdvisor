import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <Route path="/" component={Welcome} exact={true} /> */}
            </BrowserRouter>
        );
    }
}

export default Index;