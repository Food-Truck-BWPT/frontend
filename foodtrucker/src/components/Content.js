import React from "react"
import Login from "./Login"
import {Route} from "react-router-dom"

function Content() {
    return (
        <div className="content">
            <Route path="/login">
                <Login />
            </Route>
        </div>
    )
}

export default Content;