import { getHeroByName } from "./api.mjs";
import { handleSearchQuery } from "./handleSearchQuery.mjs";
import { openCloseNavMenu } from "./navigation.mjs";

const searchResultsDiv = document.getElementById('search-results');

const createLoadingSkeleton = (count = 3) => {
    let skeletonHTML = '';
    for (let i = 0; i < count; i++) {
      skeletonHTML += `
        <section class="hero-card skeleton">
          <div class="skeleton-name"></div>
          <div class="skeleton-image"></div>
          <div class="skeleton-link"></div>
        </section>
      `;
    }
    return skeletonHTML;
  };

document.addEventListener('DOMContentLoaded', () => {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        // Display loading skeleton immediately
        searchResultsDiv.innerHTML = createLoadingSkeleton();
        try {
            getSuperHeroData(query);
            console.log("success?")

        } catch (error) {
            console.error(error);
        }
    } else {
        searchResultsDiv.textContent = 'No query provided. Try entering a character! Ex: "Spider-Man"';
    }
});

const getSuperHeroData = async (heroName) => {
    try {
        // Remove the loading skeleton
        const data = await getHeroByName(heroName); // Get the JSON data directly

        if (data) { // Check if data exists
            console.log("hero data: ", data);
            console.log(data.results[0]);
            searchResultsDiv.innerHTML = '';
            displaySearchResultHeroCards(data.results);
        } else {
            console.error("Error: Hero data not found or error occurred.");
        }
    } catch (error) {
        console.error("request failed: ", error);
    } finally {
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
