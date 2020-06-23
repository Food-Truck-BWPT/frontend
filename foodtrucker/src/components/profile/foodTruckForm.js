import React from "react"

function NewFoodTruck() {
    return(
        <form>
            <label>Truck Name:
                <input
                name="truckName"
                type="text"
                ></input>
            </label>
            <label>Image:
                <input
                name="truckImage"
                ></input>
            </label>
            <label>Cuisine Type:
                <input
                name="foodType"
                type="text"
                ></input>
            </label>
            <label>Address:
                <input
                name="address"
                type="text"
                ></input>
            </label>
            <label>Latitude:
                <input
                name="lat"
                type="text"
                ></input>
            </label>
            <label>Longitude:
                <input
                name="long"
                type="text"
                ></input>
            </label>
            <label>Departing Time:
                <input
                name="departTime"
                type="time"
                ></input>
            </label>
            <label>Next Address:
                <input
                name="nextAddress"
                type="text"
                ></input>
            </label>
            <label>Next Latitude:
                <input
                name="nextLat"
                type="text"
                ></input>
            </label>
            <label>Next Longitude:
                <input
                name="nextLong"
                type="text"
                ></input>
            </label>
            <label>Arrival Time:
                <input
                name="arrival"
                type="time"
                ></input>
            </label>
            <label>Next Departure:
                <input
                name="nextDepart"
                type="time"
                ></input>
            </label>
        </form>
    )
}

export default NewFoodTruck