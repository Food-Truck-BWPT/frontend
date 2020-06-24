import React from "react"
import VendorNav from "./VendorNav"
import NewFoodTruck from "./foodTruckForm"
import {Route} from "react-router-dom"

function Profile() {
    return (
        <section>
            <VendorNav />
            <Route exact path="/profile/newtruck">
                <NewFoodTruck />
            </Route>
        </section>
    )
}

/* true false vendor show according content */

export default Profile