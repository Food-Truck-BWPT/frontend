import React, { useState } from "react";
// import { trucks } from "../../api/dummytruck";

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

export default Search;
