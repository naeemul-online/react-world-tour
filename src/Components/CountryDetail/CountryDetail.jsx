import CountryData from "../CountryData/CountryData";

const CountryDetail = ({props}) => {
    const {country, handleVisitedCountry, handleVisitedCountryFlag} = props;
    return (
        <div>
            <h3>Country detail: {country.name.common}</h3>
            <CountryData props={props}></CountryData>
        </div>
        
    );
};

export default CountryDetail;