import { getFavoriteHeroIds } from "./favoriteHero.mjs";
import { getHeroById } from "./api.mjs";

const convertHeroIdsToObjects = async( favoriteHeroIds ) =>{
    console.log("In hero favorites to objects.");
    if (favoriteHeroIds !== null){
        return Promise.all(favoriteHeroIds.map( id => getHeroById(id) ));
    }
}

const generateFavoriteHeroCards = async() =>{
    console.log("In hero card maker.");
    const favoriteHeros = await convertHeroIdsToObjects( getFavoriteHeroIds() );
    if (favoriteHeros){
        const cardBox = document.querySelector("#favoritedList");
        cardBox.insertAdjacentHTML("beforebegin", "<h2 id=\"favoriteListTitle\">Favorite Heroes</h2>")

        favoriteHeros.forEach(hero => {
            cardBox.insertAdjacentHTML("beforeend", `
                <div class="heroCard">
                    <a href="focus.html?heroId=${hero.id}"><img class="cardImage" alt="Image of hero" src="${hero.image.original_url}"></a>
                    <h2 class="cardHeroName">${hero.name}</h2>
                </div> 
            `);
            let prerenderLink = document.createElement('link');
            prerenderLink.rel = 'prerender';
            prerenderLink.href = `focus.html?heroId=${hero.id}`;
            
            // Fallback prefetch for browsers that don't support prerender
            let prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = `focus.html?heroId=${hero.id}`;
            
            // Append to document head
            document.head.appendChild(prerenderLink);
            document.head.appendChild(prefetchLink);
        });
    }
}

document.addEventListener("DOMContentLoaded", async() =>{ await generateFavoriteHeroCards() });
