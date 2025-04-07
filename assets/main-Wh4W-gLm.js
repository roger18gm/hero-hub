import{o as r,h as s,g as t}from"./api-TbsWuuHg.js";import{g as n}from"./favoriteHero-Cj1f5rFi.js";r();s();const c=async e=>(console.log("In hero favorites to objects."),Promise.all(e.map(o=>t(o)))),d=async()=>{console.log("In hero card maker.");const e=await c(n()),o=document.querySelector("#favoritedList");e.forEach(a=>{o.insertAdjacentHTML("beforeend",`
            <div class="heroCard">
                <img class="cardImage" alt="Image of hero" src="${a.image.original_url}">
                <h2 class="cardHeroName">${a.name}</h2>
            </div> 
        `)})};document.addEventListener("DOMContentLoaded",async()=>{await d()});
