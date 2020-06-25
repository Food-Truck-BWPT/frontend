import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Truck from "./Truck";
import { getTrucks } from "../actions/actions";

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

function Trucks(props) {
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    props.getTrucks();
  }, [props.allTrucks]);
  return (
    <TrucksContainer>
      {props.filteredTrucks.map((truck, index) => {
        return <Truck truck={truck} index={index} />;
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

export default connect(mapStateToProps, { getTrucks })(Trucks);
