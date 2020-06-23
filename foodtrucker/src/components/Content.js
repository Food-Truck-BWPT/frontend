import React from "react"
import Login from "./login/loginForm"
import Signup from "./login/signupForm"
import Profile from "./profile/Profile"
import {Route} from "react-router-dom"

function Content() {
    return (
        <div className="content">
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Signup />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
        </div>
    )
}

export default Content;