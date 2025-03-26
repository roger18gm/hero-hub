import { getHeroByName, getResourceById, getHeroById } from "./api.mjs";


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
const batman = await getHeroById("1699"); // return classic batman

const populateTitleAndImage = (heroObj) =>{
  document.getElementsByTagName('title')[0].innerHTML = heroObj.name;
  document.querySelector("#big-title").innerHTML = heroObj.name;
  document.querySelector("#hero-img-page").src = heroObj.image.screen_large_url;
}

const getAliases = (heroObj) =>{
  const string = heroObj.aliases;
  return string.split("\n");
}

const populatePageOne = (heroObj) =>{
  document.querySelector("#hero-name-span").innerHTML = heroObj.name;

  const aliasList = document.querySelector("#alias-list");
  getAliases(heroObj).forEach( alias =>{
    aliasList.insertAdjacentHTML( "beforeend", `<li>${alias}</li>`);
  });

  document.querySelector("#heroRealName").innerHTML = heroObj.real_name;
  document.querySelector("#heroSpecies").innerHTML = heroObj.origin.name;

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
populatePageOne(batman);
populateTitleAndImage(batman);
// ---------- DYNAMIC CONTENT

