import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components"
const TrucksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
  height: 70vh;
  h2 {
    font-size: 4rem;
  }
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    input {
      margin: 1%;
    }
    button {
      font-size: 2rem;
      margin: 1%;
    }
  }
`;

const Truck = styled.div`
  border: 1px solid #323643;
  width: 20%;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #323643;
  box-shadow: 0px 10px 20px #606470;
  
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
    }
  }
`;

function Trucks() {
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/trucks")
      .then((res) => {
        console.log(res);
        setTrucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <TrucksContainer>
      {trucks.map((truck, index) => {
        return (
          <Truck key={index}>
            <h2>{truck.name}</h2>
            <img src={truck.imageOfTruck} alt="visual of truck" />
            <p>Cuisine Type: {truck.cuisineType}</p>
            <p>{truck.address}</p>
            <p>Latitude: {truck.lat}</p>
            <p>Longitude: {truck.long}</p>
          </Truck>
        );
      })}
    </TrucksContainer>
  );
}

export default Trucks;
