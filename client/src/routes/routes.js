import {Switch, Route, Redirect} from "react-router";
import React, { Fragment } from "react";

import FooterComponent from "../component/Footer/Footer";
import HeaderComponent from "../component/Header/Header"
import SignUpContainer from "../container/signUpContainer";
import LoginContainer from "../container/LoginContainer";
import dashboardContainer from "../container/dashboardContainer";
import ErrorPage404 from "../component/ErrorPage/errorPage404"
import Cookies from "universal-cookie";
const cookies = new Cookies();


const getHeaderFooter = (content) => {
    return (
        <Fragment>
            <HeaderComponent />
                {content}
            <FooterComponent />
        </Fragment>
    )
}



export const Routes = () => {
    return (
        <Switch>
            {
                getHeaderFooter(
                    <Fragment>
                        <ProtectedRoute
                            path="/dashboard"
                            exact={true} 
                            component={dashboardContainer}
                        />
                       
                        <Route path="/sign-up" exact={true} component={SignUpContainer} />
                        <Route path="/login" exact={true} component={LoginContainer} />
                        {/* <Route component={ErrorPage404} /> */}
                    </Fragment>
                )
            }
        </Switch>
    );

}



const ProtectedRoute = ({component: Component, ...rest}) => {

    const isAuth = cookies.get("authToken");
return (

    isAuth ?
    <Route {...rest} render={
        (props) => {
            return <Component  {...props}/>
        }
    } />
    :
    <Redirect path="/"/>
)

}