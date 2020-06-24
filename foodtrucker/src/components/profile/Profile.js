import React, {useState} from "react"
import VendorNav from "./VendorNav"
import NewFoodTruck from "./foodTruckForm"
import { connect } from "react-redux"
import {Route} from "react-router-dom"
import VendorTrucks from "./VendorTrucks"

function Profile() {
    const isVendor = false;
    return (
        <section>
            { isVendor ?
                (
                    <div>
                    <VendorNav />
                    <Route exact path="/profile/newtruck" component={NewFoodTruck} />
                    <Route exact path="/profile/mytrucks" component={VendorTrucks} />

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