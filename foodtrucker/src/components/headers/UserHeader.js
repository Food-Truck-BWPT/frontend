
import React from 'react'
import styled from "styled-components";
import history from '../history'

const Header = () => {
    const signOut = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }
    return (
        <StyledHeader>
            <a onClick={handleDashboard}>Dashboard</a>
            <a href='/user/trucks'>Trucks</a>
            <a onClick={signOut}>Sign Out</a>
        </StyledHeader>

    )
}
export default Header;