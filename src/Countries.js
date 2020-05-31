import React from "react";
import data from "./data/countriesAll.json";

const Countries = () => {
  return (
    <div className="countries-container">
      {data.map((country) => {
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
  );
};
export default Countries;
