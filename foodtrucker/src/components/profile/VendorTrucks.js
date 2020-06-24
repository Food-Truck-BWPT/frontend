import React, { useState } from "react";
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
    }
  }
`;

// Code
function VendorTrucks() {
  const [editing, setEditing] = useState(false);

  const editTruck = (e) => {
    setEditing(!editing);
  };

  const deleteTruck = () => {};

  const submitEdit = (e) => {
    e.preventDefault();
  };
  return (
    <Trucks>
      {trucks.map((truck, index) => {
        return (
          <Truck key={index}>
            <h2>{truck.name}</h2>
            <img src={truck.imageOfTruck} />
            <p>Cuisine Type: {truck.cuisineType}</p>
            <p>{truck.address}</p>
            <p>Latitude: {truck.lat}</p>
            <p>Longitude: {truck.long}</p>
            <div className="buttons">
              <button onClick={editTruck}>Edit</button>
              <button>Delete</button>
            </div>
          </Truck>
        );
      })}
      {editing && (
        <form onSubmit={submitEdit}>
          <h2>Edit Truck</h2>
          <label>
            Truck Name:
            <input />
          </label>
          <label>
            Image:
            <input />
          </label>
          <label>
            Cuisine Type:
            <input />
          </label>
          <label>
            Address:
            <input />
          </label>
          <label>
            Lat:
            <input />
          </label>
          <label>
            Long:
            <input />
          </label>
          <button>Submit</button>
        </form>
      )}
    </Trucks>
  );
}

export default VendorTrucks;
