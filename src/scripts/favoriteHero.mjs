// This file will have the main functions for working with the local storage.
// I'll leave these functions broad so that they can be used elsewhere. This 
// enables you to tailor functionality for other aspects of the site.

export const getFavoriteHeroIds= () =>{
    /*
    * Gets the local storage array containing the favorited hero ids.
    */
    return localStorage.getItem("favoriteHeroIds") ? JSON.parse( localStorage.getItem( "favoriteHeroIds" ) ) : null;
}

export const saveFavoriteHeroIds = ( arrayOfIds ) =>{
    /*
    * Saves an array as "favoriteHeroIds" inside local storage.
    */
    localStorage.setItem("favoriteHeroIds", JSON.stringify( arrayOfIds ));
}

export const eraseFavoriteHeroIds = () =>{
    /*
    * Use for testing. Clears local storage. 
    */
   localStorage.removeItem("favoriteHeroIds");
}

export const favoriteHero = ( heroObj ) =>{
    /*
    * This function takes a hero object and adds their id to the id index or makes
    * and saves a new index with their id as the first item.
    */
    let favoriteHeroIds;
    if (!localStorage.getItem("favoriteHeroIds")) {
        favoriteHeroIds = [ heroObj.id ];
        saveFavoriteHeroIds( favoriteHeroIds )
    } else {
        favoriteHeroIds = getFavoriteHeroIds();
        favoriteHeroIds.push( heroObj.id );
        saveFavoriteHeroIds( favoriteHeroIds );
    }
}

export const removeFromFavorites = ( heroObj ) =>{
    /*
    * Removes a hero by finding the corresponding id.
    */
    const currentFavoriteHeroIds = getFavoriteHeroIds();
    const newFavoriteHeroIds = currentFavoriteHeroIds.filter( id => id !== heroObj.id );

    saveFavoriteHeroIds( newFavoriteHeroIds );
}

export const checkHeroPresence = ( heroObj ) =>{
    /*
    * Checks to see if a hero's id is already saved.
    */
    const favoriteHeroIds = getFavoriteHeroIds();
    return favoriteHeroIds !== null ? favoriteHeroIds.some( id => id === heroObj.id ) : false;
}