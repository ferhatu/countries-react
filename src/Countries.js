import React, { useState } from "react";
import SearchCountry from "./SearchCountry";
import FilterRegion from "./FilterRegion";

const Countries = (props) => {
  const [countries, setCountries] = useState(props.data);

  const filteredCountries = (value) => {
    setCountries(
      props.data.filter((country) => country.name.toLowerCase().includes(value))
    );
  };
  const handleSearch = (e) => {
    filteredCountries(e.target.value.toLowerCase());
  };

  const countriesFilteredByRegion = (value) => {
    setCountries(props.data.filter((country) => country.region === value));
  };
  const handleFilter = (e) => {
    countriesFilteredByRegion(e.target.value.toLowerCase());
  };

  return (
    <div>
      <div className="search-field">
        <SearchCountry handleChange={handleSearch} />
        <FilterRegion handleChange={handleFilter} />
      </div>
      <div className="countries-container">
        {countries.map((country) => {
          return (
            <div key={country.numericCode} className="country">
              <img className="image" src={country.flag} alt="country flag" />
              <h1 className="country-name">{country.name}</h1>

              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Countries;
