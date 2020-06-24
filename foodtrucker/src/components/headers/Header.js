import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  background-color: #323643;

  h1{
    font-size: 4rem;
  }

  form {
    font-size: 2rem;
    input {
    font-size: 2rem;
    }
  }

  nav {
    display: flex;
    justify-content: space-around;
    width: 30%;
    a {
      font-size: 2rem;
      text-decoration: none;
      &:hover {
        color: #f7f7f7;
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Food Trucker</h1>
      <form>
        <label htmlFor="search">Search: </label>
        <input name="search"></input>
      </form>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign-up</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
