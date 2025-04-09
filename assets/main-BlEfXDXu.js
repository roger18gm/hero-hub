import{o as s,h as c,g as l}from"./api-CtMJ6fIF.js";import{g as m}from"./favoriteHero-Cj1f5rFi.js";const i="Oops, no data..",d=document.querySelector("#mission-statement"),a="http://localhost:8080/superheroes/",u=()=>{s(),c(),I(),p()},h=(e,o)=>Math.floor(Math.random()*(o-e+1))+e,v=()=>h(1,3344),g=async()=>{try{const e=await fetch(a+"team");if(e.ok){const o=await e.json();return console.log("comic team",o),o}else console.error("Error in getTeamData. Status: "+e.statusText)}catch(e){console.error("Request failed in getTeamData. Message: "+e.message)}},f=e=>`<div id="hero-banner">
                <img src="${e!==null?e.results.image.medium_url:"images/backupHeroBanner.webp"}" alt="hero image">
                <div id="hero-text">
                    <h1>Your source for all things super.</h1>
                    <h2>Hero-Hub 2025</h2>
                </div>
            </div>
    `,p=async()=>{const e=await g();document.querySelector("main").insertAdjacentHTML("afterbegin",f(e))},M=async()=>{const e=v();try{const o=await fetch(a+`movie/${e}`);if(o.ok){const t=await o.json();return console.log("comic movie",t),t}else console.error("Error in getComicMovie. Status: "+o.statusText)}catch(o){console.error("Request failed in getComicMovie. Message: "+o.message)}},y=e=>`<div class="movie-spotlight">
                <div id="movie-heading">
                    <h1>Movie Spotlight</h1>
                    <h2>${e.name}</h2>
                </div>
                <img src="${e.image.small_url}" alt="${e.deck}">
                <div id="movie-stats">
                    <ul> 
                        <li><h3>Rating: ${e.rating==null?i:e.rating}</h3></li>
                        <li><h3>Budget: ${e.budget==null?i:e.budget}</h3></li>
                        <li><h3>Box Office Revenue: ${e.box_office_revenue==null?i:e.box_office_revenue}</h3></li>
                        <li><h3>Runtime: ${~~(e.runtime/60)}hr ${e.runtime%60}m </h3></li>
                    </ul>
                </div>
            </div>
    `,I=async()=>{const e=await M();e.error=="Object Not Found"?console.log("refresh for a valid movie"):d.insertAdjacentHTML("afterend",y(e.results))};u();const b=async e=>{if(console.log("In hero favorites to objects."),e!==null)return Promise.all(e.map(o=>l(o)))},H=async()=>{console.log("In hero card maker.");const e=await b(m());if(e){const o=document.querySelector("#favoritedList");o.insertAdjacentHTML("beforebegin",'<h2 id="favoriteListTitle">Favorite Heroes</h2>'),e.forEach(t=>{o.insertAdjacentHTML("beforeend",`
                <div class="heroCard">
                    <a href="focus.html?heroId=${t.id}"><img class="cardImage" alt="Image of hero" src="${t.image.original_url}"></a>
                    <h2 class="cardHeroName">${t.name}</h2>
                </div> 
            `);let n=document.createElement("link");n.rel="prerender",n.href=`focus.html?heroId=${t.id}`;let r=document.createElement("link");r.rel="prefetch",r.href=`focus.html?heroId=${t.id}`,document.head.appendChild(n),document.head.appendChild(r)})}};document.addEventListener("DOMContentLoaded",async()=>{await H()});
