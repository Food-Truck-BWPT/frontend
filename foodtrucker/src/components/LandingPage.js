import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  * {
    /* border: 1px solid black; */
  }
  .row {
    width: 90%;
    height: 20vh;
    @media (max-width: 920px) {
        width: 100%;
      }
  }
  .cities {
    display: flex;
    justify-content: space-around;

    div {
      width: 20%;
      background-color: #323643;
      display: flex;
      justify-content: space-around;
      flex-flow: column;
      align-items: center;
      border-radius: 2rem;
      box-shadow: 0px 10px 20px #606470;
      @media (max-width: 920px) {
        height: 30vh;
        width: 23%;
      }
      h2 {
        font-size: 3rem;
      }
      button {
        width: 50%;
        font-size: 2rem;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      width: 20%;
      font-size: 10rem;
      background-color: #323643;
      border-radius: 3rem;
      box-shadow: 0px 10px 20px #606470;
      padding-bottom: 1%;
      @media (max-width: 920px) {
        font-size: 5rem;
      }
      &:hover {
        box-shadow: none;
        border: inset 5px;
        color: #f7f7f7;
      }
    }
  }
`;

function LandingPage() {
  useEffect(() => {
    console.log("this is happening");
  }, []);

  return (
    <Hero className="hero">
      <div className="row cities">
        <div>
          <h2>Portland, OR</h2>
          <button>Trucks: number</button>
          <button>Foodies: number</button>
        </div>
        <div>
          <h2>New York City, NY</h2>
          <button>Trucks: number</button>
          <button>Foodies: number</button>
        </div>
        <div>
          <h2>San Francisco, CA</h2>
          <button>Trucks: number</button>
          <button>Foodies: number</button>
        </div>
        <div>
          <h2>Chicago, IL</h2>
          <button>Trucks: number</button>
          <button>Foodies: number</button>
        </div>
      </div>
      <div className="row buttons">
        <Link to="/register">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </Hero>
  );
}

export default LandingPage;
