const CountryData = ({props}) => {
    const {country, handleVisitedCountry, handleVisitedCountryFlag} = props;
    // console.log(country)
    return (
        <div>
            <h3>Country Area: {country.area} </h3>
        </div>
    );
};

export default CountryData;