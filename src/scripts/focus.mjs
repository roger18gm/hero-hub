import { getHeroById,
         getIssueById } from "./api.mjs";
import { handleSearchQuery } from "./handleSearchQuery.mjs";
import { openCloseNavMenu } from "./navigation.mjs";
import { favoriteHero,
         removeFromFavorites,
         checkHeroPresence } from "./favoriteHero.mjs";
// ---------- CAROUSEL BUTTONS
  const setDynamicWidth = () => {
    const expandables = document.querySelectorAll('.expandable-right');
    
    expandables.forEach(element => {
      // Create a temporary element to measure the content width
      const tempElement = element.cloneNode(true);
      tempElement.style.position = 'absolute';
      tempElement.style.visibility = 'hidden';
      tempElement.style.width = 'auto';
      document.body.appendChild(tempElement);
      
      // Get the width of the content
      const contentWidth = tempElement.offsetWidth;
      
      // Set the custom property for this specific element
      element.style.setProperty('--dynamic-width', contentWidth + 'px');
      const textLength = element.textContent.length;
      
      if (textLength <= 3) {
        element.style.paddingRight = "1em";
      }
      
      // Clean up the temporary element
      document.body.removeChild(tempElement);
    
      // Mobile animation
      if (window.innerWidth <= 680){
        document.querySelectorAll(".one-liner").forEach( element =>{
          element.addEventListener("click", ()=>{
            element.classList.toggle("clicked-one-liner");
          });
        })
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const pageOneBtn = document.querySelector('#pageOneBtn');
    const pageTwoBtn = document.querySelector('#pageTwoBtn');
    const carousel = document.querySelector('#carousel');
    
    // Button click handlers
    pageOneBtn.addEventListener('click', () => {
      slideTo(0);
    });
    
    pageTwoBtn.addEventListener('click', () => {
      slideTo(1);
    });
    
    // Slide to specific page index (0 or 1)
    function slideTo(pageIndex) {
      carousel.style.transform = `translateX(-${pageIndex * 100}vw)`;
      
      // Update active buttons
      if (pageIndex === 0){
        pageOneBtn.classList.remove('inactive-page');
        pageOneBtn.classList.add('active-page');
        pageTwoBtn.classList.remove('active-page');
        pageTwoBtn.classList.add('inactive-page');
      
        // Aria label handling
        document.getElementById('pageOneBtn').setAttribute('aria-selected', 'true');
        document.getElementById('pageTwoBtn').setAttribute('aria-selected', 'false');
        document.getElementById('page-one').setAttribute('aria-hidden', 'false');
        document.getElementById('page-two').setAttribute('aria-hidden', 'true');

      } else if (pageIndex === 1) {
        pageTwoBtn.classList.remove('inactive-page');
        pageTwoBtn.classList.add('active-page');
        pageOneBtn.classList.remove('active-page');
        pageOneBtn.classList.add('inactive-page');

        // Aria label handling
        document.getElementById('pageOneBtn').setAttribute('aria-selected', 'false');
        document.getElementById('pageTwoBtn').setAttribute('aria-selected', 'true'); 
        document.getElementById('page-one').setAttribute('aria-hidden', 'true');
        document.getElementById('page-two').setAttribute('aria-hidden', 'false');
      }
    }
  });
// ---------- CAROUSEL BUTTONS
// ---------- DYNAMIC CONTENT
const populateTitleAndImage = (heroObj) =>{
  document.getElementsByTagName('title')[0].innerHTML = "HeroHub | "+heroObj.name;
  document.querySelector("#big-title").innerHTML = heroObj.name;
  document.querySelector("#hero-img-page").src = heroObj.image.original_url;
}

const getAliases = (heroObj) =>{
  const string = heroObj.aliases;
  return heroObj.aliases !== null ? string.split("\n") : null;
}

const populatePageOne = (heroObj) =>{
  document.querySelector("#hero-name-span").innerHTML = heroObj.name;
  document.querySelector("#big-title").style.backgroundImage = `url("${heroObj.image.screen_large_url}")`; // rgb(211, 243, 159)
  document.querySelector("#origin-box").innerHTML = heroObj.deck;
  document.querySelector("#origin-box").style
  const aliasList = document.querySelector("#alias-list");

  const aliases = getAliases(heroObj); 
  if (aliases){
    aliases.forEach( alias =>{
      aliasList.insertAdjacentHTML( "beforeend", `<li>${alias}</li>`);
    });
  } else {
      aliasList.insertAdjacentHTML( "beforeend", "<li>None Available</li>");
  }
   
  document.querySelector("#heroRealName").innerHTML = heroObj.real_name !== null ? heroObj.real_name : "Not Available";
  document.querySelector("#heroOrigin").innerHTML = heroObj.origin.name !== null ? heroObj.origin.name : "Not Available";  

  let sex = null;
  switch (heroObj.gender) {
    case 1:
      sex = "Male";
      break;
    case 2:
      sex = "Female";
      break;
    case 3:
      sex = "Other";
      break;
  }
  document.querySelector("#heroSex").innerHTML = sex !== null ? sex : "Not Available";
  document.querySelector("#heroDoB").innerHTML = heroObj.birth !== null ? heroObj.birth : "Not Available";
  setDynamicWidth();
}

const populatePageTwo = ( heroObj, issue ) =>{
  document.querySelector("#issue-img").src = issue.image.original_url;
  document.querySelector("#issue-desc").innerHTML = issue.description !== null ? issue.description : "No description available.";
  document.querySelector("#issue-name").innerHTML = issue.name !== null ? `Issue name: ${issue.name}` : `<strong>${heroObj.name}'s First Issue Details</strong>`;
  document.querySelector("#hero-publisher").innerHTML = heroObj.publisher.name !== null ? heroObj.publisher.name : "N/A";
  document.querySelector("#appearance-count").innerHTML = heroObj.count_of_issue_appearances !== null ? heroObj.count_of_issue_appearances : "Not Available";
  document.querySelector("#cover-date").innerHTML = issue.cover_date !== null ? issue.cover_date : "Not Available";
  document.querySelector("#store-date").innerHTML = issue.store_date !== null ? issue.store_date: "Not Available";
  setDynamicWidth();
}

const initFocusPage = async() =>{
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("heroId")) {
    const hero = await getHeroById(urlParams.get("heroId"));
    activeHero = hero;
    if (checkHeroPresence( hero )){
      document.querySelector("#saveHeroBtn").innerHTML = "Favorited";
      document.querySelector("#saveHeroBtn").classList.add("favorited");
    } else {
      document.querySelector("#saveHeroBtn").innerHTML = "Favorite Hero?";
    }
    console.log(hero);
    const issue = await getIssueById(hero.first_appeared_in_issue.id);

    populateTitleAndImage(hero);
    populatePageOne(hero);
    populatePageTwo(hero, issue);
  } else {
    const batman = await getHeroById(1699);
    const issue = await getIssueById(batman.first_appeared_in_issue.id);
    activeHero = batman;
    if (checkHeroPresence( activeHero )){
      document.querySelector("#saveHeroBtn").innerHTML = "Favorited";
      document.querySelector("#saveHeroBtn").classList.add("favorited");
    } else {
      document.querySelector("#saveHeroBtn").innerHTML = "Favorite Hero?";
    }
    populatePageOne(batman);
    populateTitleAndImage(batman);
    populatePageTwo( batman, issue );

  }
}

// ---------- DYNAMIC CONTENT
// ---------- INIT PAGE
var activeHero;
openCloseNavMenu();
handleSearchQuery();
initFocusPage();

// Remove loading screen
document.querySelector("#hero-img-page").addEventListener("load", () =>{
    const loadingText = document.querySelector("#loadingText");
    console.log(loadingText);
    loadingText.parentNode.removeChild(loadingText);

    document.querySelector("#focusMain").classList.add("visibleMain");
});

// ---------- INIT PAGE
// ---------- MANAGE FAVORITE HERO
const favoriteHeroManager = ( hero, save ) =>{
  document.querySelector("#saveHeroBtn").classList.remove("favorited");
  switch (save) {
    case true:

      if (!checkHeroPresence( hero )){
        favoriteHero( hero );
        document.querySelector("#saveHeroBtn").innerHTML = "Favorited";
        document.querySelector("#saveHeroBtn").classList.add("favorited");
      }
      break;

    case false:

      if(checkHeroPresence( hero )){
        removeFromFavorites( hero );
        document.querySelector("#saveHeroBtn").innerHTML = "Favorite Hero?";
      }
      break;
  }
}

document.querySelector("#saveHeroBtn").addEventListener("click", (event) =>{
  if (event.target.classList.contains("favorited")){
    favoriteHeroManager( activeHero, false );
  } else {
    favoriteHeroManager( activeHero, true );
  }
});
// ---------- MANAGE FAVORITE HERO