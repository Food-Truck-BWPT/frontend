import React from "react"
import VendorNav from "./VendorNav"
import NewFoodTruck from "./foodTruckForm"
import {Route} from "react-router-dom"

function Profile() {
    return (
        <section>
            <VendorNav />
            <Route path="/newtruck">
                <NewFoodTruck />
            </Route>
        </section>
    )
}

export default Profile