import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  // 1. use useState to save the data
  const [countries, setCountries] = useState([]);
  //   Declare variable to save the visited country with useState
  const [visitedCountry, setVisitedCountry] = useState([]);

  // Declare useState to save the flag data
  const [visitedCountryFlag, setVisitedCountryFlag] = useState([]);

  // 2. Use useEffect to fetch the API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // created handler for visited country button
  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  // created handler for visited country flag
  const handleVisitedCountryFlag = (flag) => {
    const newVisitedCountryFlag = [...visitedCountryFlag, flag];
    setVisitedCountryFlag(newVisitedCountryFlag);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h3>Visited Country: {visitedCountry.length} </h3>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flags-container">
        <h3>Visited Country Flag: {visitedCountryFlag.length}</h3>
        {visitedCountryFlag.map((flag) => (
          
          <img src={flag}></img>
          
        ))}
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedCountryFlag={handleVisitedCountryFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
