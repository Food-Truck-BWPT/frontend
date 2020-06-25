import React from "react"
import Login from "./login/loginForm"
import Signup from "./login/signupForm"
import Profile from "./profile/Profile"
import LandingPage from "./LandingPage"
import {Route} from "react-router-dom"
import PrivateRoute from "../utils/PrivateRoute"
import Trucks from "./Trucks"

function Content() {
    return (
        <div className="content">
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Signup />
            </Route>
            <PrivateRoute path="/profile" component={Profile} />
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/trucks">
                <Trucks />
            </Route>
        </div>
    )
}

export default Content;