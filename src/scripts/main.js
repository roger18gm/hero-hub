import { handleSearchQuery } from "./handleSearchQuery.mjs";
import { openCloseNavMenu } from "./navigation.mjs";

const nullValuePhrase = `Oops, no data..`;
const targetContainer = document.querySelector("#favoritedList");
const baseUrl = "http://localhost:8080/superheroes/";
// const baseUrl = "https://herohub-springboot-app.onrender.com/superheroes/";

const init = () => {
    openCloseNavMenu();
    handleSearchQuery();
    displayMovieDiv();
    // displayVideoDiv();
    displayHeroBanner();
}

const generateRandomId = (min, max) => {
    if (min > max) {
      [min, max] = [max, min]; // Swap if min is greater than max
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
  
// Example usage for comic videos (adjust min/max as needed)
const getRandomComicVideoId = () => {
    const minVideoId = 1; // assuming smallest video id is 1
    const maxVideoId = 3000; // highest video id i saw was 2900 sumn
    return generateRandomId(minVideoId, maxVideoId);
};

// Example usage for movies (adjust min/max as needed)
const getRandomMovieId = () => {
    const minMovieId = 1; // smallest was 1
    const maxMovieId = 3344; // highest i saw
    return generateRandomId(minMovieId, maxMovieId);
};

const getTeamData = async() => {
    try {
        const response = await fetch( baseUrl + `team`); // http://localhost:8080/superheroes/comicVideos
        if ( response.ok ) {
            const jsonData = await response.json();
            console.log("comic team", jsonData);
            return jsonData;
        } else {
            console.error("Error in getTeamData. Status: "+response.statusText);
        }
    } catch (e) {
        console.error("Request failed in getTeamData. Message: "+e.message);
    }
}

const HeroBannerTemplate = (data) => {
    return `<div id="hero-banner">
                <img src="${data !== null ? data.results.image.medium_url: `images/backupHeroBanner.webp`}" alt="hero image">
                <div id="hero-text">
                    <h1>Your source for all things super.</h1>
                    <h2>Hero-Hub 2025</h2>
                </div>
            </div>
    `;
}

const displayHeroBanner = async() => {
    const teamData = await getTeamData();
    const mainDiv = document.querySelector("main");
    mainDiv.insertAdjacentHTML("afterbegin", HeroBannerTemplate(teamData));
}

const getComicVideoById = async() => {
    const randomVideoId = getRandomComicVideoId();
    try {
        const response = await fetch( baseUrl + `comicVideo/${randomVideoId}`); // http://localhost:8080/superheroes/comicVideos
        if ( response.ok ) {
            const jsonData = await response.json();
            console.log("comic video", jsonData);
            return jsonData;
        } else {
            console.error("Error in getComicVideo. Status: "+response.statusText);
        }
    } catch (e) {
        console.error("Request failed in getComicVideo. Message: "+e.message);
    }
}

const getComicMovieById = async() => {
    const randomMovieId = getRandomMovieId();
    try {
        const response = await fetch( baseUrl + `movie/${randomMovieId}`); // http://localhost:8080/superheroes/comicIssues
        if ( response.ok ) {
            const jsonData = await response.json();
            console.log("comic movie", jsonData);
            return jsonData;
        } else {
            console.error("Error in getComicMovie. Status: "+response.statusText);
        }
    } catch (e) {
        console.error("Request failed in getComicMovie. Message: "+e.message);
    }
}

const movieHTMLTemplate = (data) => {
    return `<div class="movie-spotlight">
                <div id="movie-heading">
                    <h1>Movie Spotlight</h1>
                    <h2>${data.name}</h2>
                </div>
                <img src="${data.image.small_url}" alt="${data.deck}">
                <div id="movie-stats">
                    <ul> 
                        <li><h3>Rating: ${data.rating == null ? nullValuePhrase : data.rating}</h3></li>
                        <li><h3>Budget: ${data.budget == null ? nullValuePhrase : data.budget}</h3></li>
                        <li><h3>Box Office Revenue: ${data.box_office_revenue == null ? nullValuePhrase : data.box_office_revenue}</h3></li>
                        <li><h3>Runtime: ${~~(data.runtime / 60)}hr ${data.runtime % 60}m </h3></li>
                    </ul>
                </div>
            </div>
    `;
}

const displayMovieDiv = async () => {
    const movieJson = await getComicMovieById();
    if (movieJson.error == "Object Not Found") {
        console.log("refresh for a valid movie")
    } else {
        targetContainer.insertAdjacentHTML("beforebegin", movieHTMLTemplate(movieJson.results));
    }
}

const displayVideoDiv = async () => {
    const videoJson = await getComicVideoById();
    if (videoJson.error == "Object Not Found") {
        console.log("refresh for a valid movie")
    } else {
        targetContainer.insertAdjacentHTML("beforebegin", videoHTMLTemplate(videoJson.results))
    }
}

const videoHTMLTemplate = (data) => {
    return `<div id="video-div">
                <h1>${data.name}</h1>
                <h3>${data.deck}</h3>
                <iframe src=${data.embed_player}
                class="video-iframe"></iframe>
                <h2>Created by: ${data.user}</h2>
            </div>
    `;
}

init();