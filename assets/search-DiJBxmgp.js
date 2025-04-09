import{b as a,o as n,h as t}from"./api-CtMJ6fIF.js";const s=document.getElementById("search-results"),c=(r=3)=>{let e="";for(let o=0;o<r;o++)e+=`
        <section class="hero-card skeleton">
          <div class="skeleton-name"></div>
          <div class="skeleton-image"></div>
          <div class="skeleton-link"></div>
        </section>
      `;return e};document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search).get("query");if(e){s.innerHTML=c();try{l(e),console.log("success?")}catch(o){console.error(o)}}else s.textContent='No query provided. Try entering a character! Ex: "Spider-Man"'});const l=async r=>{try{const e=await a(r);e?(console.log("hero data: ",e),console.log(e.results[0]),s.innerHTML="",d(e.results)):console.error("Error: Hero data not found or error occurred.")}catch(e){console.error("request failed: ",e)}finally{}};n();t();const i=r=>{const e=`focus.html?heroId=${r.id}`;return`<section class="hero-card">
                <h2 class="hero-name">${r.name}</h2>
                <img class="hero-card-img" src="${r.image.small_url}" alt="hero image"/>
                <div class="link-div">
                <a class="card-link" href="${e}">Visit hero profile!</a>
                </div>
            </section> `},d=r=>{const e=r.map(i);s.insertAdjacentHTML("beforeend",e.join(""))};
