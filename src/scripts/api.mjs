// This file contains all of the functions needs to work with the local server. 
// The base URL is " http://localhost:8080/superheroes/ "
const baseUrl = "http://localhost:8080/superheroes/";

export const getHeroByName = async(name) => {
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

export const getHeroById = async(id) => {
    try {
        const response = await fetch( baseUrl+"id/"+id); // http://localhost:8080/superheroes/id/{id}
        if ( response.ok ) {
            const jsonData = await response.json();
            return jsonData.results[0];
        } else {
            console.error("Error in getHeroByName. Status: "+response.statusText);
        }
    } catch (e) {
        console.error("Request failed in getHeroByName. Message: "+e.message);
    }
}

export const getIssueById = async(id) =>{
    try {
        const response = await fetch( baseUrl+"issue/"+id); // http://localhost:8080/superheroes/issue/{id}
        if ( response.ok ) {
            const jsonData = await response.json();
            console.log(jsonData.results);
            return jsonData.results;
        } else {
            console.error("Error in getIssueById. Status: "+response.statusText);
        }
    } catch (e) {
        console.error("Request failed in getIssueById. Message: "+e.message);
    }
}
