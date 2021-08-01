class Country {
    constructor({name, alpha3Code, capital, region, population, flag}) {
        this.name = name
        this.code = alpha3Code
        this.capital = capital
        this.region = region
        this.population = population
        this.flag = flag
    }

    render() {
        return `
        <arcticle>
        <h1>${this.name}</h1>
        <img src="${this.flag}" alt="" width="250" higth="150">
        <div class="row">
            <span class="desc">Code: </span>
            <span>${this.code}</span>
        </div>
        <div class="row">
            <span class="desc">Capital: </span>
            <span>${this.capital}</span>
        </div>
        <div class="row">
            <span class="desc">Region: </span>
            <span>${this.region}</span>
        </div>
        <div class="row">
            <span class="desc">Population: </span>
            <span>${this.population}</span>
        </div>
    </arcticle>
        `
    }
}

class Loader {
    static render() {
        return `<div class="lds-roller"><div></div><div></div><div></div><div>`
    }
}

const input = document.querySelector('#search')
const searchBtn = document.querySelector('#searchBtn')
const container = document.querySelector('#country')
searchBtn.onclick = () => {
    const countryCode = input.value
    if (countryCode === "") return
    container.innerHTML = Loader.render();
    //IIFE Immediately Invoked Function Expression
    // setTimeout(async () => {
    //     const country = await getCountryByCode(countryCode)
    //     container.innerHTML = new Country(country[0]).render()
    // }, 1200)
    (async () => {
        const country = await getCountryByCode(countryCode)
        container.innerHTML = new Country(country[0]).render()
    })();
}

async function getCountryByCode(code) {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${code}`)
    const country = await response.json();
    return await country;
}