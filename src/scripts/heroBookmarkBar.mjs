import { getFavoriteHeroIds } from "./favoriteHero.mjs";
import { getHeroById } from "./api.mjs";

const convertHeroIdsToObjects = async( favoriteHeroIds ) =>{
    console.log("In hero favorites to objects.");
    return Promise.all(favoriteHeroIds.map( id => getHeroById(id) ));
}

const generateFavoriteHeroCards = async() =>{
    console.log("In hero card maker.");
    const favoriteHeros = await convertHeroIdsToObjects( getFavoriteHeroIds() );
    const cardBox = document.querySelector("#favoritedList");
    favoriteHeros.forEach(hero => {
        cardBox.insertAdjacentHTML("beforeend", `
            <div class="heroCard">
                <img class="cardImage" alt="Image of hero" src="${hero.image.original_url}">
                <h2 class="cardHeroName">${hero.name}</h2>
            </div> 
        `)
    });
}

document.addEventListener("DOMContentLoaded", async() =>{ await generateFavoriteHeroCards() });
