import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = (props) => {
    const {country, handleVisitedCountry, handleVisitedCountryFlag} = props
    // console.log(country)
    const {name, flags, population, area, cca3} = country
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (

        <div className={`country ${visited ? 'visited': 'non-visited'}` }>
            <h3>Name:{name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Populations: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark as Visited</button>
            <br />
            <button onClick={()=>handleVisitedCountryFlag(country.flags.png)}>Visited Country Flag</button>
            <br />
            <button onClick={handleVisited}>{visited? 'visited':'Going'}</button>
            {
                visited ? "I have visited this country" : "I want to visit"
            }
            <hr />
            <CountryDetail props={props}></CountryDetail>
        </div>

    );
};

export default Country;