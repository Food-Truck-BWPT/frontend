import React, { useEffect } from "react";
import styled from "styled-components";

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
  }
  .cities {
      display: flex;
      justify-content:space-around;
      
      div {
          width: 20%;
          background-color: #323643;
          display: flex;
          justify-content: space-around;
          flex-flow: column;
          align-items: center;
          border-radius: 2rem;
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
    button {
      height: 70%;
      width: 20%;
      font-size: 10rem;
      background-color: #323643;
      border-radius: 3rem;
    }
  }
`;

function LandingPage() {

  useEffect(()=> {
    console.log("this is happening")
  }, [])

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
        <button>Signup</button>
        <button>Login</button>
      </div>
    </Hero>
  );
}

export default LandingPage;
