import React from "react";

const SearchCountry = (props) => {
  return (
    <div className="search-field">
      <input
        onChange={props.handleChange}
        type="search"
        className="country-search"
        placeholder="Search country"
      />
    </div>
  );
};
export default SearchCountry;
