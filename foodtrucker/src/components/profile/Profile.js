import React, {useState} from "react"
import VendorNav from "./VendorNav"
import NewFoodTruck from "./foodTruckForm"
import {Route} from "react-router-dom"

function Profile() {
const [isVendor, setIsVendor] = useState(false)

    return (
        <section>
            <VendorNav />
            <Route exact path="/profile/newtruck">
                <NewFoodTruck />
            </Route>
        </section>
    )
}

export default Profile