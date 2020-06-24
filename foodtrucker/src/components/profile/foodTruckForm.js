import React, {useState} from "react"
import useInput from "../hooks/useInput"
import styled from "styled-components"

const NewTruckForm = styled.form`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-flow: wrap;

  label {
      width: 25%;
  }
  input {
      margin: 1rem;
  }
`;

function NewFoodTruck() {

  const [truck, setTruck] = useState({
    name: "",
    imageOfTruck: "",
    cuisineType: "",
    address: "",
    lat: "",
    long: "",

  });

  const handleChanges = event => {
    setTruck({ ...truck, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
  }

  return (
    <NewTruckForm onSubmit={submitForm}>
      <label>
        Truck Name:
        <input
          name="truckName"
          type="text"
          placeholder="Name of Truck"
          value={truck.name}
          onChange={handleChanges}/>
      </label>
      <label>
        Image Url:
        <input
          name="truckImage"
          type="url"
          placeholder="Image url"
          value={truck.imageOfTruck}
          onChange={handleChanges}/>
      </label>
      <label>
        Cuisine Type:
        <input
          name="cuisineType"
          type="text"
          placeholder="Cuisine Type"
          value={truck.cuisineType}
          onChange={handleChanges}/>
      </label>
      <label>
        Address:
        <input
          name="address"
          type="text"
          placeholder="Food Truck Address"
          value={truck.address}
          onChange={handleChanges}/>
      </label>
      <label>
        Latitude:
        <input
          name="latitude"
          type="number"
          placeholder="Current Latitude"
          value={truck.lat}
          onChange={handleChanges}/>
      </label>
      <label>
        Longitude:
        <input
          name="longitude"
          type="number"
          placeholder="Current Longitude"
          value={truck.long}
          onChange={handleChanges}/>
      </label>
      <button>Add Food Truck</button>
    </NewTruckForm>
  );
}

export default NewFoodTruck;
