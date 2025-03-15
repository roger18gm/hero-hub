export const openCloseNavMenu = () => {
    const navMenuBtn = document.querySelector("#toggle-nav-btn");
    const menuSvg = document.querySelector(".menu-svg");
    const closeSvg = document.querySelector(".close-svg");
    navMenuBtn.addEventListener("click", () => {
        const menuDropDown = document.querySelector(".menu-dropdown");
        menuDropDown.classList.toggle("show");
        menuSvg.classList.toggle("hide");
        closeSvg.classList.toggle("hide");

    })
}