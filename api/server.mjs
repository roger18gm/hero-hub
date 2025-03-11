export default async function GET(request) {
  // Extract the search parameter from the URL
  const url = new URL(request.url);
  const heroName = url.searchParams.get('hero');
  const API_KEY = process.env.VITE_API_KEY;
  const apiUrl = `https://superheroapi.com/api/${API_KEY}`;

  try {
    const response = await fetch(`${apiUrl}/search/${heroName}`);

    if (!response.ok) { 
      throw new Error('Failed to fetch hero data');
    }
      
    const data = await response.json();
    console.log(data);
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error fetching hero data:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}