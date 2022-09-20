// alert('Im rest your Boss!')

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// show flags destructuring in parameter Option - 03
const getCountryHTML = ({ name, flags }) => {
    // const { name, flags } = country;
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
    </div>
    `
    // <></>
}

// without destructuring normal way-01
// const getCountryHTML = country => {
//     return `
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}">
//     </div>
//     `
//     // <></>
// }

// show flags destructuring Option-02
// const getCountryHTML = country => {
//     const { name, flags } = country;
//     return `
//     <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//     </div>
//     `
//     // <></>
// }

loadCountries();