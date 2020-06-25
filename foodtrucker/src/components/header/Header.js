import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./Search";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  background-color: #323643;
  @media (max-width: 500px) {
    flex-flow: column;
    height: 30vh;
  }
  h1 {
    font-size: 4rem;
    @media (max-width: 920px) {
      font-size: 3rem;
    }
  }

  form {
    font-size: 2rem;

    input {
      font-size: 2rem;
      @media (max-width: 920px) {
        font-size: 1.5rem;
      }
    }
  }

  nav {
    display: flex;
    justify-content: space-around;
    width: 30%;
    @media (max-width: 920px) {
      width: 40%;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
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
      <Search />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/trucks">Trucks</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign-up</Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;
