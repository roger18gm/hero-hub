export async function onRequestGet(context) {
    // Get URL and parse the query parameter
    const url = new URL(context.request.url);
    const heroName = url.searchParams.get('hero');
    
    if (!heroName) {
      return new Response(JSON.stringify({ error: "Hero name is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Your API key would be stored in Cloudflare's environment variables
    const API_KEY = context.env.API_KEY;
    const apiUrl = `https://superheroapi.com/api/${API_KEY}`;
    
    try {
      const response = await fetch(`${apiUrl}/search/${heroName}`);
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }