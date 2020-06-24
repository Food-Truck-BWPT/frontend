import React from "react";
import styled from "styled-components";

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
  return (
    <NewTruckForm>
      <label>
        Truck Name:
        <input name="truckName" type="text"></input>
      </label>
      <label>
        Image Url:
        <input name="truckImage"></input>
      </label>
      <label>
        Cuisine Type:
        <input name="foodType" type="text"></input>
      </label>
      <label>
        Address:
        <input name="address" type="text"></input>
      </label>
      <label>
        Latitude:
        <input name="lat" type="text"></input>
      </label>
      <label>
        Longitude:
        <input name="long" type="text"></input>
      </label>
      <label>
        Departing Time:
        <input name="departTime" type="time"></input>
      </label>
      <label>
        Next Address:
        <input name="nextAddress" type="text"></input>
      </label>
      <label>
        Next Latitude:
        <input name="nextLat" type="text"></input>
      </label>
      <label>
        Next Longitude:
        <input name="nextLong" type="text"></input>
      </label>
      <label>
        Arrival Time:
        <input name="arrival" type="time"></input>
      </label>
      <label>
        Next Departure:
        <input name="nextDepart" type="time"></input>
      </label>
      <button>Submit</button>
    </NewTruckForm>
  );
}

export default NewFoodTruck;