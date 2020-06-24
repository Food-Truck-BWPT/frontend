import React, {useState} from "react"
import VendorNav from "./VendorNav"
import NewFoodTruck from "./foodTruckForm"
import { connect } from "react-redux"
import {Route} from "react-router-dom"
import VendorTrucks from "./VendorTrucks"
import FavoriteTrucks from "./favoriteTrucks"

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
                    <Route exact path="/profile/favoritetrucks" component={FavoriteTrucks} />
                )}
        </section>

    )
}

export default Profile