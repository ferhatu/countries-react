import React from "react";
const FilterRegion = (props) => {
  return (
    <select onChange={props.handleChange} className="filter-region">
      <option value=""> All region</option>
      <option value="Europe"> Europe</option>
      <option value="Asia"> Asia</option>
      <option value="Americas">America </option>
      <option value="Africa"> Africa</option>
      <option value="Oceania"> Oceania</option>
    </select>
  );
};
export default FilterRegion;
