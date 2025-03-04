// const url = "https://superheroapi.com/api/";
// const apiKey = import.meta.env.VITE_API_KEY;

    // try {
    //     // Construct the URL with the API key and hero name
    //     // const response = await fetch(`https://superheroapi.com/api/${import.meta.env.VITE_API_KEY}/search/${heroName}`);
    //     const response = await fetch(`https://superheroapi.com/api/d21f20d1428479b87073078a48b4d720/search/${heroName}`);
        
    //     if (!response.ok) { 
    //         throw new Error('Failed to fetch hero data');
    //     }

    //     const data = await response.json();
    //     console.log(data);
    //     return data;
    // } catch (error) {
    //     console.error('Error fetching hero data:', error);
    // }
    // Fetch from your Vercel proxy
// fetch(`/api/server?${heroName}`)
// .then((res) => res.json())
// .then((data) => console.log(data));
// }
const getHeroData = async (heroName) => {
    fetch(`/api/server?character=${heroName}`)
      .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
};
  
getHeroData("batman");
  
// Usage
// (async function apiTest() {

//     const batmanInfo = await getHeroData('batman');
//     console.log(batmanInfo);
    
// })();
console.log("Hello WOrld");