const getHeroData = (heroName) => {
    fetch(`/api/server?hero=${encodeURIComponent(heroName)}`)
    // fetch(`/api/server`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // You would typically do something with the data here,
            // like updating your UI
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
    
// Usage example:
getHeroData('batman');
  
const fetchApiData =() => {
    fetch(`/api/test`)
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
}
  
console.log("Hello WOrld");
fetchApiData();

const getHelloWorld = async () => {
    const response = await fetch('/helloworld');
    const data = await response.text();
    console.log(data); // Output: Hello from Cloudflare Pages Function!
}

getHelloWorld();


const getSuperHeroData = (heroName) => {
    fetch(`/superhero?hero=${encodeURIComponent(heroName)}`)
      .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
          // Update your UI with the hero data
      })
      .catch(error => {
          console.error('Error:', error);
      });
};

getSuperHeroData('batman');