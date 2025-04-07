import{b as a,o as t,h as c}from"./api-TbsWuuHg.js";const o=document.getElementById("search-results");document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search).get("query");if(e)try{n(e),console.log("success?")}catch(s){console.error(s)}else o.textContent="No query provided."});const n=async r=>{try{const e=await a(r);e?(console.log("hero data: ",e),console.log(e.results[0]),d(e.results)):console.error("Error: Hero data not found or error occurred.")}catch(e){console.error("request failed: ",e)}};t();c();const l=r=>{const e=`focus.html?heroId=${r.id}`;return`<section class="hero-card">
                <h2 class="hero-name">${r.name}</h2>
                <img class="hero-card-img" src="${r.image.small_url}" alt="hero image"/>
                <div class="link-div">
                <a class="card-link" href="${e}">Visit hero profile!</a>
                </div>
            </section> `},d=r=>{const e=r.map(l);o.insertAdjacentHTML("beforeend",e.join(""))};
