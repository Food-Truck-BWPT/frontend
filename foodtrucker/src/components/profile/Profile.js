import React from "react"
import VendorNav from "./VendorNav"
import NewFoodTruck from "./foodTruckForm"
import { connect } from "react-redux"
import {Route} from "react-router-dom"

function Profile() {
    const isVendor = false;
    return (
        <section>
            { isVendor ?
                (
                    <div>
                    <VendorNav />
                    <Route exact path="/profile/newtruck" component={NewFoodTruck} />

                    </div>

                ) :
                (
                    <div>user</div>
                )}

        </section>

    )
}

/* true false vendor show according content */

export default Profile