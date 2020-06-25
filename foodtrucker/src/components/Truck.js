import React from "react";
import styled from "styled-components";

const StyledTruck = styled.div`
  border: 1px solid #323643;
  width: 20%;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #323643;
  box-shadow: 0px 10px 20px #606470;
  margin: 3% 0;
  p {
    font-size: 2rem;
    margin: 3%;
  }
  button {
    font-size: 2rem;
    padding: 1rem;
    background-color: #606470;
    color: #f7f7f7;
    border-radius: 0.5rem;
  }`

function Truck({ truck, index }) {

  const saveToFaves = () => {
    
  }

  return (
    <StyledTruck key={index}>
      <h2>{truck.name}</h2>
      <img src={truck.imageOfTruck} alt="visual of truck" />
      <p>Cuisine Type: {truck.cuisineType}</p>
      <p>{truck.address}</p>
      <p>Latitude: {truck.lat}</p>
      <p>Longitude: {truck.long}</p>
      <button>Save</button>
    </StyledTruck>
  );
}

export default Truck;
