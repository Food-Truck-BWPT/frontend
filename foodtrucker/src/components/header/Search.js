import React, { useState } from "react";
import { connect } from "react-redux";

function Search() {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form>
      <label>
        Search:
        <input name="search" value={search} onChange={changeSearch} />
      </label>
    </form>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Search);
