import{o as v,h as g,g as s,a as y}from"./api-TbsWuuHg.js";import{c as i,r as p,f as L}from"./favoriteHero-Cj1f5rFi.js";const m=()=>{document.querySelectorAll(".expandable-right").forEach(t=>{const n=t.cloneNode(!0);n.style.position="absolute",n.style.visibility="hidden",n.style.width="auto",document.body.appendChild(n);const a=n.offsetWidth;t.style.setProperty("--dynamic-width",a+"px"),t.textContent.length<=3&&(t.style.paddingRight="1em"),document.body.removeChild(n)})};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#pageOneBtn"),t=document.querySelector("#pageTwoBtn"),n=document.querySelector("#carousel");e.addEventListener("click",()=>{a(0)}),t.addEventListener("click",()=>{a(1)});function a(r){n.style.transform=`translateX(-${r*100}vw)`,r===0?(e.classList.remove("inactive-page"),e.classList.add("active-page"),t.classList.remove("active-page"),t.classList.add("inactive-page")):r===1&&(t.classList.remove("inactive-page"),t.classList.add("active-page"),e.classList.remove("active-page"),e.classList.add("inactive-page"))}});const c=e=>{document.getElementsByTagName("title")[0].innerHTML="HeroHub | "+e.name,document.querySelector("#big-title").innerHTML=e.name,document.querySelector("#hero-img-page").src=e.image.original_url},H=e=>{const t=e.aliases;return e.aliases!==null?t.split(`
`):null},l=e=>{document.querySelector("#hero-name-span").innerHTML=e.name,document.querySelector("#big-title").style.backgroundImage=`url("${e.image.screen_large_url}")`,document.querySelector("#origin-box").innerHTML=e.deck,document.querySelector("#origin-box").style;const t=document.querySelector("#alias-list"),n=H(e);n?n.forEach(r=>{t.insertAdjacentHTML("beforeend",`<li>${r}</li>`)}):t.insertAdjacentHTML("beforeend","<li>None Available</li>"),document.querySelector("#heroRealName").innerHTML=e.real_name!==null?e.real_name:"Not Available",document.querySelector("#heroOrigin").innerHTML=e.origin.name!==null?e.origin.name:"Not Available";let a=null;switch(e.gender){case 1:a="Male";break;case 2:a="Female";break;case 3:a="Other";break}document.querySelector("#heroSex").innerHTML=a!==null?a:"Not Available",document.querySelector("#heroDoB").innerHTML=e.birth!==null?e.birth:"Not Available",m()},u=(e,t)=>{document.querySelector("#issue-img").src=t.image.original_url,document.querySelector("#issue-desc").innerHTML=t.description!==null?t.description:"No description available.",document.querySelector("#issue-name").innerHTML=t.name!==null?`Issue name: ${t.name}`:`<strong>${e.name}'s First Issue Details</strong>`,document.querySelector("#hero-publisher").innerHTML=e.publisher.name!==null?e.publisher.name:"N/A",document.querySelector("#appearance-count").innerHTML=e.count_of_issue_appearances!==null?e.count_of_issue_appearances:"Not Available",document.querySelector("#cover-date").innerHTML=t.cover_date!==null?t.cover_date:"Not Available",document.querySelector("#store-date").innerHTML=t.store_date!==null?t.store_date:"Not Available",m()},S=async()=>{const e=new URLSearchParams(window.location.search);if(e.has("heroId")){const t=await s(e.get("heroId"));o=t,i(t)?(document.querySelector("#saveHeroBtn").innerHTML="Favorited",document.querySelector("#saveHeroBtn").classList.add("favorited")):document.querySelector("#saveHeroBtn").innerHTML="Favorite Hero?",console.log(t);const n=await y(t.first_appeared_in_issue.id);c(t),l(t),u(t,n)}else{const t=await s(1699);o=t,i(o)?(document.querySelector("#saveHeroBtn").innerHTML="Favorited",document.querySelector("#saveHeroBtn").classList.add("favorited")):document.querySelector("#saveHeroBtn").innerHTML="Favorite Hero?",l(t),c(t),u(t,issue)}};var o;v();g();S();const d=(e,t)=>{switch(document.querySelector("#saveHeroBtn").classList.remove("favorited"),t){case!0:i(e)||(L(e),document.querySelector("#saveHeroBtn").innerHTML="Favorited",document.querySelector("#saveHeroBtn").classList.add("favorited"));break;case!1:i(e)&&(p(e),document.querySelector("#saveHeroBtn").innerHTML="Favorite Hero?");break}};document.querySelector("#saveHeroBtn").addEventListener("click",e=>{e.target.classList.contains("favorited")?d(o,!1):d(o,!0)});
