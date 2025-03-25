// This file contains all of the functions needs to work with the local server. 
// The base URL is " http://localhost:8080/superheroes/ "
const baseUrl = "http://localhost:8080/superheroes/";

const getHeroByName = async(name) => {
    try {
        const response = await fetch( baseUrl + name ); // http://localhost:8080/superheroes/{name}
        if ( response.ok ) {
            const jsonData = await response.json();
            return jsonData;
        } else {
            console.error("Error in getHeroByName. Status: "+response.statusText);
        }
    } catch (e) {
        console.error("Request failed in getHeroByName. Message: "+e.message);
    }
}

const getResourceById = async( resource, id ) => {
    const specializedUrl = `${baseUrl}${resource}/${id}`; // http://localhost:8080/superheros/issue/id    

    if ( resource !== "origin" && resource !== "issue" ) { // Validate resource arguement
        console.error("Invalid resource arg named in getOriginOrIssuebyId"); 
        return "Invalid resource arguement. Specify origin or issue."
    }

    try {
        const response = await fetch(specializedUrl);
        if ( response.ok ) {
            const jsonData = await response.json();
            return jsonData;
        } else {
            console.error("Error in getHeroByName. Status: "+response.statusText);
        }
    } catch (e) {
        console.error("Request failed in getHeroByName. Message: "+e.message);
    }
}