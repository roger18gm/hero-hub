(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const i=()=>{const o=document.querySelector(".search-submit-btn"),e=document.querySelector(".search-input"),r=()=>{const n=e.value.trim();if(n){const t=`search.html?query=${encodeURIComponent(n)}`;window.location.href=t}else alert("Please enter a search term.")};o.addEventListener("click",r),e.addEventListener("keydown",n=>{n.key==="Enter"&&r()})},u=()=>{const o=document.querySelector("#toggle-nav-btn"),e=document.querySelector(".menu-svg"),r=document.querySelector(".close-svg");o.addEventListener("click",()=>{document.querySelector(".menu-dropdown").classList.toggle("show"),e.classList.toggle("hide"),r.classList.toggle("hide")})},a="http://localhost:8080/superheroes/",l=async o=>{try{const e=await fetch(a+o);if(e.ok)return await e.json();console.error("Error in getHeroByName. Status: "+e.statusText)}catch(e){console.error("Request failed in getHeroByName. Message: "+e.message)}},d=async o=>{try{const e=await fetch(a+"id/"+o);if(e.ok)return(await e.json()).results[0];console.error("Error in getHeroByName. Status: "+e.statusText)}catch(e){console.error("Request failed in getHeroByName. Message: "+e.message)}},m=async o=>{try{const e=await fetch(a+"issue/"+o);if(e.ok)return(await e.json()).results;console.error("Error in getIssueById. Status: "+e.statusText)}catch(e){console.error("Request failed in getIssueById. Message: "+e.message)}};export{m as a,l as b,d as g,i as h,u as o};
