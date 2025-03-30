import { handleSearchQuery } from "./handleSearchQuery.mjs";
import { openCloseNavMenu } from "./navigation.mjs";

const searchResultsDiv = document.getElementById('search-results');

document.addEventListener('DOMContentLoaded', () => {

    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        try {
            getSuperHeroData(query);
            console.log("success?")
        } catch (error) {
            console.error(error);
        }
    } else {
        searchResultsDiv.textContent = 'No query provided.';
    }
});


const getSuperHeroData = async (heroName) => {
    try {
        const response = await fetch(`http://localhost:3000/api/superheroes/${heroName}`);

        if (response.ok) {
            const data = await response.json();
            console.log("hero data: ", data)
            console.log(data.results[0]);
            displaySearchResultHeroCards(data.results);
        } else {
            console.error("Error: ", response.statusText);
        }
    } catch {
        console.error("request failed: ", error)
    }
};


openCloseNavMenu();
handleSearchQuery();

// data.image.small_url, data.image.thumb_url, data.image.icon_url
const searchResultHeroCardTemplate = (data) => {

    const focusHeroURL = `focus.html?heroId=${data.id}`;
    return `<section class="hero-card">
                <h2 class="hero-name">${data.name}</h2>
                <img class="hero-card-img" src="${data.image.small_url}" alt="hero image"/>
                <div class="link-div">
                <a class="card-link" href="${focusHeroURL}">Visit hero profile!</a>
                </div>
            </section> `;
}

const displaySearchResultHeroCards = (data) => {
    const heroCardsHTML = data.map(searchResultHeroCardTemplate);
    searchResultsDiv.insertAdjacentHTML("beforeend", heroCardsHTML.join("")); //.join("") gets rid of comma from map()
    
}