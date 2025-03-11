export async function onRequestGet(context) {
    try {
      // Log the request info
      console.log("Request received:", context.request.url);
      
      // Get URL and parse the query parameter
      const url = new URL(context.request.url);
      const heroName = url.searchParams.get('hero');
      
      console.log("Hero name:", heroName);
      
      if (!heroName) {
        return new Response(JSON.stringify({ error: "Hero name is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
      
      // Your API key would be stored in Cloudflare's environment variables
      const API_KEY = context.env.API_KEY;
      
      // Check if API key exists
      if (!API_KEY) {
        console.error("API_KEY environment variable is missing");
        return new Response(JSON.stringify({ error: "Server configuration error" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
      
      const apiUrl = `https://superheroapi.com/api/${API_KEY}`;
      console.log("API URL (without hero):", apiUrl);
      
      // Make the request
      console.log("Fetching from:", `${apiUrl}/search/${heroName}`);
      const response = await fetch(`${apiUrl}/search/${heroName}`);
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error:", errorText);
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log("Data received successfully");
      
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      console.error("Function error:", error.message);
      return new Response(JSON.stringify({ 
        error: error.message,
        stack: error.stack
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }