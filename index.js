// XMLHTTPRequest
const URL = "https://restcountries.eu/rest/v2/all";

const getCountries = () => {
    const res = new XMLHttpRequest();

    res.open("GET", URL);
    //res.responseText = "json";

    res.onload = () => {
        const data = res.response;

        const jsonData = JSON.parse(data);

        // Get all the countries with a population of less than 2 lakhs using Filter function
        const countriesLessthan2L = jsonData
            .filter((el) => {
                return el.population < 20000000;
            })
            .map((el) => ({
                name: el.name,
                population: el.population,
            }));
        console.log(countriesLessthan2L);

        const asianCountries = jsonData.filter((el) => el.region === "Asia");

        console.log(asianCountries);

        // Print the following details name, capital, flag using forEach function
        jsonData.forEach((element) => {
            console.log(
                "Country details using forEach",
                element.name,
                element.capital,
                element.flag
            );
        });

        //Print the total population of countries using reduce function
        const totalPopulation = jsonData.reduce(
            (a, b) => a.population + b.population
        );
        console.log("Total Population", totalPopulation);

        const countrieswithUSDollar = jsonData.filter(
            (el) => el.currency === "USD"
        );

        console.log("Countries with US Dollar", countrieswithUSDollar);
    };
    res.send();
};

getCountries();