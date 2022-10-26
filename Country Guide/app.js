const submitBtn = document.querySelector(".submit-btn");
const countrybox = document.querySelector("#country-search");
const form = document.querySelector("form");
const result = document.querySelector(".country-info");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const country = countrybox.value;
  console.log(country);

  getData(country);
});

const getData = async (country) => {
  try {
    const url = `
https://restcountries.com/v3.1/name/${country}`;
    const resp = await fetch(url);
    const info = await resp.json();
    displayCountry(info);
  } catch (error) {
    result.innerHTML = `<h3 class="error" > Can't fetch the country Info! Check for the country name again!.</h3>`;
  }
};

const displayCountry = (info) => {
  result.innerHTML = `<img src="${info[0].flags.png}" alt="" class="flag" />
                    <h1>${countrybox.value.toUpperCase()}</h1>
          <section class="info">
            <h3>Capital : <span>${info[0].capital[0]}</span></h3>
            <h3>Continent : <span>${info[0].continents[0]}</span> </h3>
            <h3>Population : <span>${info[0].population}</span></h3>
            <h3>Area : <span>${info[0].area}</span></h3>
            <h3>Map : <span><a href="${
              info[0].maps.googleMaps
            }">Check Out in Google Maps</a></span></h3>  
          </section>`;
  console.log(info[0]);
};

// flags, capital, continent, currencies, languages, maps, population, area
//   console.log(info[0].flags.png);
//   console.log(info[0].capital[0]);
//   console.log(info[0].continents[0]);
//   console.log(info[0].maps.googleMaps);
//   console.log(info[0].population);
//   console.log(info[0].area);
