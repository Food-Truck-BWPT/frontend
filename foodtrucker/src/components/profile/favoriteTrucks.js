import React from "react";
import { trucks } from "../../api/dummytruck";
import styled from "styled-components";

// Styles
const Trucks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
  height: 70vh;
`;

const Truck = styled.div`
  border: 1px solid #323643;
  width: 20%;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #323643;
  box-shadow: 0px 10px 20px #606470;
  h2 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
    margin: 3%;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    button {
      font-size: 2rem;
      padding: 1rem;
      background-color: #606470;
      color: #f7f7f7;
      border-radius: .5rem;
      &:hover {
        border: inset 2px;
      }
    }
  }
`;

// Code
function FaveTrucks() {
  
  return (
    <Trucks>
      {trucks.map((truck, index) => {
        return (
          <Truck key={index}>
            <h2>{truck.name}</h2>
            <img src={truck.imageOfTruck} alt="visual of food truck" />
            <p>Cuisine Type: {truck.cuisineType}</p>
            <p>{truck.address}</p>
            <p>Latitude: {truck.lat}</p>
            <p>Longitude: {truck.long}</p>
          </Truck>
        );
      })}
    </Trucks>
  );
}

export default FaveTrucks;