import React from "react"
import { trucks } from "../../api/dummytruck"


function VendorTrucks() {

    return (
        <div className="trucks">
            {trucks.map(truck => {
               return( <div className="truck">{truck.name}</div>)
            })}

        </div>
    )
}

export default VendorTrucks