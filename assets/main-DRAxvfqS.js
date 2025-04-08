import{o as n,h as d,g as c}from"./api-Buosg2ZA.js";import{g as s}from"./favoriteHero-Cj1f5rFi.js";n();d();const i=async e=>{if(console.log("In hero favorites to objects."),e!==null)return Promise.all(e.map(o=>c(o)))},l=async()=>{console.log("In hero card maker.");const e=await i(s());if(e){const o=document.querySelector("#favoritedList");o.insertAdjacentHTML("beforebegin",'<h2 id="favoriteListTitle">Favorite Heroes</h2>'),e.forEach(r=>{o.insertAdjacentHTML("beforeend",`
                <div class="heroCard">
                    <a href="focus.html?heroId=${r.id}"><img class="cardImage" alt="Image of hero" src="${r.image.original_url}"></a>
                    <h2 class="cardHeroName">${r.name}</h2>
                </div> 
            `);let a=document.createElement("link");a.rel="prerender",a.href=`focus.html?heroId=${r.id}`;let t=document.createElement("link");t.rel="prefetch",t.href=`focus.html?heroId=${r.id}`,document.head.appendChild(a),document.head.appendChild(t)})}};document.addEventListener("DOMContentLoaded",async()=>{await l()});
