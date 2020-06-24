import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const VendorNavi = styled.nav`
    background-color: #606470;
    padding: 1%;
    display: flex;
    justify-content: space-around;
    a {
        color: #323643;
        background-color: #f7f7f7;
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: none;
        border-radius: 1rem;
        transition: .5s;
        padding: .5rem;
        &:hover {
            color: #f7f7f7;
            background-color: #323643;
            border-radius: 1rem;
            transition: .5s;
        }
    }
`

function VendorNav() {
    return (
        <VendorNavi>
            {/* create new truck */}
            <Link to="/profile/newtruck">Add Truck</Link>
            {/* edit and delete trucks */}
            <Link to="/profile">My Trucks</Link>
        </VendorNavi>
    )
}

export default VendorNav