import{o as r,h as t,g as s}from"./api-DbJ_kNL1.js";import{g as n}from"./favoriteHero-Cj1f5rFi.js";r();t();const c=async e=>(console.log("In hero favorites to objects."),Promise.all(e.map(o=>s(o)))),i=async()=>{console.log("In hero card maker.");const e=await c(n());if(e.length){const o=document.querySelector("#favoritedList");o.insertAdjacentHTML("beforebegin",'<h2 id="favoriteListTitle">Favorite Heroes</h2>'),e.forEach(a=>{o.insertAdjacentHTML("beforeend",`
                <div class="heroCard">
                    <a href="focus.html?heroId=${a.id}"><img class="cardImage" alt="Image of hero" src="${a.image.original_url}"></a>
                    <h2 class="cardHeroName">${a.name}</h2>
                </div> 
            `)})}};document.addEventListener("DOMContentLoaded",async()=>{await i()});
