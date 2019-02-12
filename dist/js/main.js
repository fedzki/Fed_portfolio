// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const gallery = document.querySelector("project-gallery");
const currentPic = document.querySelector("current-pic");
const projectPics = document.querySelector("project-pics");
const projectSMpic = document.querySelectorAll("sm-pic");
const galButtonLight = document.querySelectorAll(".btn-light");
const galButtonDark = document.querySelectorAll(".btn-dark");
const galItems = document.querySelectorAll(".gal-items");

// Set Initial Sate of Menu

let showMenu = false;
let showGallery = false;

menuBtn.addEventListener("click", toggleMenu);
galItems.addEventListener("click", toggleGallery);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

function toggleGallery() {
  if (!showGallery) {
  }
}
