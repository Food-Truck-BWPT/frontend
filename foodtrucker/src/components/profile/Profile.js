import React from "react";
import VendorNav from "./VendorNav";
import NewFoodTruck from "./foodTruckForm";
// import { connect } from "react-redux";
import { Route } from "react-router-dom";
import VendorTrucks from "./VendorTrucks";
import FaveTrucks from "./favoriteTrucks";
import UserNav from "./UserNav";


function Profile() {
  const isVendor = true;
  return (
    <section>
      {isVendor ? (
        <div>
          <VendorNav />
          <Route exact path="/profile/newtruck" component={NewFoodTruck} />
          <Route exact path="/profile" component={VendorTrucks} />
        </div>
      ) : (
        <div>
          <UserNav />
          <Route
            exact
            path="/profile"
            component={FaveTrucks}
          />
        </div>
      )}
    </section>
  );
}

export default Profile;
