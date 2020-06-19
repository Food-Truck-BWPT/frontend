import React from "react"
import Login from "./Login"
import Signup from "./Signup"
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