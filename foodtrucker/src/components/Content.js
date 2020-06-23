import React from "react"
import Login from "./login/loginForm"
import Signup from "./login/signupForm"
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
        </div>
    )
}

export default Content;