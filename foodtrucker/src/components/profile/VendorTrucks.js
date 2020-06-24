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
  const [truckToEdit, setTruckToEdit] = useState({
    name: "",
    imageOfTruck: "",
    cuisineType: "",
    address: "",
    lat: "",
    long: ""
  });

  const editTruck = (truck) => {
    setEditing(true);
    setTruckToEdit({
      ...truckToEdit,
      name: truck.name,
      imageOfTruck: truck.imageOfTruck,
      cuisineType: truck.cuisineType,
      address: truck.address,
      lat: truck.lat,
      long: truck.long
    });
  };

  const editingTruck = (e) => {
    setTruckToEdit({
        ...truckToEdit,
        [e.target.name]: e.target.value
    })
  }

  const deleteTruck = (truckid) => {
    console.log(truckid);
  };

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
              <button onClick={() => editTruck(truck)}>Edit</button>
              <button onClick={() => deleteTruck(truck.id)}>Delete</button>
            </div>
          </Truck>
        );
      })}
      {editing && (
        <form onSubmit={submitEdit}>
          <h2>Edit Truck</h2>
          <label>
            Truck Name:
            <input 
            name="name"
            type="text"
            value={truckToEdit.name}
            onChange={editingTruck}
            />
          </label>
          <label>
            Image:
            <input 
            name="imageOfTruck"
            type="url"
            value={truckToEdit.imageOfTruck}
            onChange={editingTruck}
            />
          </label>
          <label>
            Cuisine Type:
            <input 
            name="cuisineType"
            type="text"
            value={truckToEdit.cuisineType}
            onChange={editingTruck}
            />
          </label>
          <label>
            Address:
            <input 
            name="address"
            type="address"
            value={truckToEdit.address}
            onChange={editingTruck}
            />
          </label>
          <label>
            Lat:
            <input
            name="lat"
            type="number"
            value={truckToEdit.lat}
            onChange={editingTruck}
            />
          </label>
          <label>
            Long:
            <input 
            name="long"
            type="number"
            value={truckToEdit.long}
            onChange={editingTruck}
            />
          </label>
          <button>Submit</button>
        </form>
      )}
    </Trucks>
  );
}

export default VendorTrucks;
