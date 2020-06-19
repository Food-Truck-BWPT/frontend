import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const StyledHeader = styled.header`

    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
    nav {
        display: flex;
        justify-content: space-around;
        width: 30%;
    }
`

function Header() {
    return (
        <StyledHeader>
            <h1>Title</h1>
            <form>
                <label htmlFor="search">Search: </label>
                <input name="search"></input>
            </form>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link>Sign-up</Link>
            </nav>
        </StyledHeader>
    )
}

export default Header;