import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const StyledHeader = styled.header`

    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
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
                <Link>Home</Link>
                <Link>Login</Link>
                <Link>Sign-up</Link>
            </nav>
        </StyledHeader>
    )
}

export default Header;