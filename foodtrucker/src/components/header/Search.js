import React, { useState } from "react";
import { connect } from "react-redux";
import {filterTrucks} from "../../actions/actions"

function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
    const filteredTrucks = props.allTrucks.filter(truck => { return (truck.name.toLowerCase().includes(search) || truck.cuisineType.toLowerCase().includes(search))})
    props.filterTrucks(filteredTrucks)
  }

  const submitSearch = (e) => {
e.preventDefault()
  }

  return (
    <form onSubmit={submitSearch}>
      <label>
        Search:
        <input name="search" value={search} onChange={changeSearch} />
      </label>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
    allTrucks: state.allTrucks
  }
}

export default connect(mapStateToProps, {filterTrucks})(Search);
