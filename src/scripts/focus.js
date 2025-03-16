// RADIO buttons
const btnOne = document.querySelector("#pageOneBtn");
const btnTwo = document.querySelector("#pageTwoBtn");
const btnThree = document.querySelector("#pageThreeBtn");
// PAGES
const pageOne = document.querySelector("#pageOne");
const pageTwo = document.querySelector("#pageTwo");
const pageThree = document.querySelector("#pageThree");

// SCROLL MENU ANIMATION LOGIC.
btnOne.addEventListener("click", () => {
    pageOne.style.width = "100vw";
    pageOne.style.display = "grid";
    if (window.getComputedStyle(pageTwo).display != "none") {
        pageTwo.style.animation = "outRight 0.55s ease forwards";
        setTimeout(() => {
            pageTwo.style.display = "none";
            pageTwo.style.removeProperty("animation");
        }, 550)
    } else if (window.getComputedStyle(pageThree).display != "none") {
        pageThree.style.animation = "outRight 0.55s ease forwards";
        setTimeout(() => {
            pageThree.style.display = "none";
            pageThree.style.removeProperty("animation");
        }, 550)
    } else { console.log("Issue with btn three click function. See focus.js.") }
    requestAnimationFrame(() => {
        pageOne.style.animation = "inLeft 0.55s forwards";
        pageOne.addEventListener("animationend", () => {
            pageOne.style.removeProperty("animation");
        }, {once: true});
    })
});
btnTwo.addEventListener("click", () => {
    let fromLeft;
    pageTwo.style.width = "100vw";
    pageTwo.style.display = "grid";
    if (window.getComputedStyle(pageOne).display != "none") {
        fromLeft = false;
        pageOne.style.animation = "outLeft 0.55s ease forwards";
        setTimeout(() => {
            pageOne.style.display = "none";
            pageOne.style.removeProperty("animation");
        }, 550)
    } else if (window.getComputedStyle(pageThree).display != "none") {
        fromLeft = true;
        pageThree.style.animation = "outRight 0.55s ease forwards";
        setTimeout(() => {
            pageThree.style.display = "none";
            pageThree.style.removeProperty("animation");
        }, 550)
    } else { console.log("Issue with btn three click function. See focus.js.") }
    // Determine entrance.
    if (fromLeft) {
        requestAnimationFrame(() => {
            pageTwo.style.animation = "inLeft 0.55s forwards";
            pageTwo.addEventListener("animationend", () => {
                pageTwo.style.removeProperty("animation");
            }, {once: true});
        })
    } else {
        requestAnimationFrame(() => {
            pageTwo.style.animation = "inRight 0.55s forwards";
            pageTwo.addEventListener("animationend", () => {
                pageTwo.style.removeProperty("animation");
            }, {once: true});
        })
    }
});
btnThree.addEventListener("click", () => {
    pageThree.style.width = "100vw";
    pageThree.style.display = "grid";
    if (window.getComputedStyle(pageOne).display != "none") {
        pageOne.style.animation = "outLeft 0.55s ease forwards";
        setTimeout(() => {
            pageOne.style.display = "none";
            pageOne.style.removeProperty("animation");
        }, 550)
    } else if (window.getComputedStyle(pageTwo).display != "none") {
        pageTwo.style.animation = "outLeft 0.55s ease forwards";
        setTimeout(() => {
            pageTwo.style.display = "none";
            pageTwo.style.removeProperty("animation");
        }, 550)
    } else { console.log("Issue with btn three click function. See focus.js.") }
    requestAnimationFrame(() => {
        pageThree.style.animation = "inRight 0.55s forwards";
        pageThree.addEventListener("animationend", () => {
            pageThree.style.removeProperty("animation");
        }, {once: true});
    })
});