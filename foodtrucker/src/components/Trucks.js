import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTrucks, saveTruck } from "../actions/actions";

const TrucksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  height: 70vh;
  width: 100%;
  @media (max-width: 500px) {
    flex-flow: column;
    height: auto;
  }
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

const StyledTruck = styled.div`
  border: 1px solid #323643;
  width: 30%;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #323643;
  box-shadow: 0px 10px 20px #606470;
  margin: 3% 0;
  @media (max-width: 920px) {
    width: 30%;
    margin: 1%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
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
  }
`;

function Trucks(props) {
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    props.getTrucks();
  }, []);

  const saveToFaves = (currentid) => {
    const savedTruck = props.allTrucks.filter((truck) => {
      return truck.id === currentid;
    });
    console.log(savedTruck[0]);
    props.saveTruck(savedTruck[0]);
  };
  return (
    <TrucksContainer>
      {props.filteredTrucks.map((truck, index) => {
        return (
          <StyledTruck key={index}>
            <h2>{truck.name}</h2>
            <img src={truck.imageOfTruck} alt="visual of truck" />
            <p>Cuisine Type: {truck.cuisineType}</p>
            <p>{truck.address}</p>
            <p>Latitude: {truck.lat}</p>
            <p>Longitude: {truck.long}</p>
            <button onClick={() => saveToFaves(truck.id)}>Save</button>
          </StyledTruck>
        );
      })}
    </TrucksContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    allTrucks: state.allTrucks,
    filteredTrucks: state.filteredTrucks,
  };
};

export default connect(mapStateToProps, { getTrucks, saveTruck })(Trucks);
