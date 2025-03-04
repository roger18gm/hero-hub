// api/superhero.js

export default async function GET(request) {

  const API_KEY = process.env.VITE_API_KEY;
  const url = `https://superheroapi.com/api/${API_KEY}`;

  console.log("Incoming request:", req.url); // Debug request URL
  console.log("Headers:", req.headers); // Debug headers
  
  // Extract query parameter
  const character = new URL(req.url, `http://${req.headers.host}`).searchParams.get("character");

  if (!character) {
    return res.status(400).json({ error: "Character query parameter is required." });
  }

  try {
    const response = await fetch(`${url}/search/${character}`);
    const data = await response.json();

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}


// import dotenv from 'dotenv';
// dotenv.config();

// const url = "https://superheroapi.com/api/";
// // const apiKey = import.meta.env.VITE_API_KEY;
// const apiKey = process.env.VITE_API_KEY;

// const getHeroData = async (heroName) => {
//     try {
//         // Construct the URL with the API key and hero name
//         const response = await fetch(`${url}${apiKey}/search/${heroName}`);
//         // const response = await fetch(`https://superheroapi.com/api/d21f20d1428479b87073078a48b4d720/search/${heroName}`);
        
//         if (!response.ok) { 
//             throw new Error('Failed to fetch hero data');
//         }

//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error('Error fetching hero data:', error);
//     }
// }

// // Usage
// (async function apiTest() {

//     const batmanInfo = await getHeroData('spider');
//     console.log(batmanInfo);
    
// })();

// console.log("Hello World")