import { getHeroByName, 
         getHeroById,
         getIssueById } from "./api.mjs";
import { handleSearchQuery } from "./handleSearchQuery.mjs";
import { openCloseNavMenu } from "./navigation.mjs";
import { getFavoriteHeroIds,
         saveFavoriteHeroIds,
         eraseFavoriteHeroIds,
         favoriteHero,
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
      
      // Clean up the temporary element
      document.body.removeChild(tempElement);
    });
  }
  document.addEventListener('DOMContentLoaded', setDynamicWidth);

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
      } else if (pageIndex === 1) {
        pageTwoBtn.classList.remove('inactive-page');
        pageTwoBtn.classList.add('active-page');
        pageOneBtn.classList.remove('active-page');
        pageOneBtn.classList.add('inactive-page');
      }
    }
  });
// ---------- CAROUSEL BUTTONS
// ---------- DYNAMIC CONTENT
const populateTitleAndImage = (heroObj) =>{
  document.getElementsByTagName('title')[0].innerHTML = heroObj.name;
  document.querySelector("#big-title").innerHTML = heroObj.name;
  document.querySelector("#hero-img-page").src = heroObj.image.original_url;
}

const getAliases = (heroObj) =>{
  const string = heroObj.aliases;
  return string.split("\n");
}

const populatePageOne = (heroObj) =>{
  document.querySelector("#hero-name-span").innerHTML = heroObj.name;
  document.querySelector("#big-title").style.backgroundImage = `url("${heroObj.image.screen_large_url}")`; // rgb(211, 243, 159)
  document.querySelector("#origin-box").innerHTML = heroObj.deck;
  document.querySelector("#origin-box").style
  const aliasList = document.querySelector("#alias-list");
  getAliases(heroObj).forEach( alias =>{
    aliasList.insertAdjacentHTML( "beforeend", `<li>${alias}</li>`);
  });

  document.querySelector("#heroRealName").innerHTML = heroObj.real_name;
  document.querySelector("#heroOrigin").innerHTML = heroObj.origin.name;

  let sex;
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
    default:
      console.error("Error inside populatePageOne gender switch statement.")
  }
  document.querySelector("#heroSex").innerHTML = sex;
  document.querySelector("#heroDoB").innerHTML = heroObj.birth;
  setDynamicWidth();
}

const populatePageTwo = ( heroObj, issue ) =>{
  document.querySelector("#issue-img").src = issue.image.original_url;
  document.querySelector("#issue-desc").innerHTML = issue.description !== null ? issue.description : "No description available.";
  document.querySelector("#issue-name").innerHTML = issue.name !== null ? `Issue name: ${issue.name}` : `<strong>${heroObj.name}'s First Issue Details</strong>`;
  document.querySelector("#hero-publisher").innerHTML = heroObj.publisher.name !== null ? heroObj.publisher.name : "N/A";
  document.querySelector("#appearance-count").innerHTML = heroObj.count_of_issue_appearances !== null ? heroObj.count_of_issue_appearances : "N/A";
  document.querySelector("#cover-date").innerHTML = issue.cover_date !== null ? issue.cover_date : "N/A";
  document.querySelector("#store-date").innerHTML = issue.store_date !== null ? issue.store_date: "N/A";
  setDynamicWidth();
}

const initFocusPage = async() =>{
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("heroId")) {
    const hero = await getHeroById(urlParams.get("heroId"));
    if (checkHeroPresence( hero )){
      document.querySelector("#saveHeroBtn").innerHTML = "Favorited";
    }
    console.log(hero);
    const issue = await getIssueById(hero.first_appeared_in_issue.id);

    populateTitleAndImage(hero);
    populatePageOne(hero);
    populatePageTwo(hero, issue);
  } else {
    const batman = await getHeroById(1699);
    populatePageOne(batman);
    populateTitleAndImage(batman);
    populatePageTwo( batman, issue );
  }
}

// ---------- DYNAMIC CONTENT
// ---------- INIT PAGE
openCloseNavMenu();
handleSearchQuery();
initFocusPage();