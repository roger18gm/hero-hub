import { openCloseNavMenu } from "./navigation.mjs";

const getSuperHeroData = async (heroName) => {
    try {
        const response = await fetch(`http://localhost:3000/api/superheroes/${heroName}`);

        if (response.ok) {
            const data = await response.json();
            console.log("hero data: ", data)
            console.log(data.results[0]);
        } else {
            console.error("Error: ", response.statusText);

        }

    } catch {
        console.error("request failed: ", error)
    }
};


openCloseNavMenu();
// getSuperHeroData('Batman');