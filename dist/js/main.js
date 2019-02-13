// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const gallery = document.querySelector(".project-gallery");
const currentPic = document.querySelector(".current-pic");
const projectPics = document.querySelector(".project-pics");
const projectSMpic = document.querySelectorAll(".project-smpic");
const galButtonLight = document.querySelectorAll(".btn-light");
const galButtonDark = document.querySelectorAll(".btn-dark");
const galItems = document.querySelectorAll(".gal-item");
const galPics = document.querySelectorAll(".gal-img");

// Set Initial Sate of Menu

let showMenu = false;
let showGallery = false;

menuBtn.addEventListener("click", toggleMenu);

for (var i = 0; i < galPics.length; i++) {
  galPics[i].addEventListener("click", toggleGallery);
}

currentPic.addEventListener("click", toggleGallery);

//galItems.forEach(item => item.addEventListener("click", toggleGallery));
//galItems.addEventListener("click", toggleGallery);

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
    console.log("open");
    galPics.forEach(item => item.classList.add("close"));
    gallery.classList.add("show");
    currentPic.classList.add("show");
    projectPics.classList.add("show");
    projectSMpic.forEach(item => item.classList.add("show"));
    galItems.forEach(item => item.classList.add("show"));
    //Set Gallery State
    showGallery = true;
  } else {
    console.log("close");
    galPics.forEach(item => item.classList.remove("close"));
    gallery.classList.remove("show");
    currentPic.classList.remove("show");
    projectPics.classList.remove("show");
    projectSMpic.forEach(item => item.classList.remove("show"));
    galItems.forEach(item => item.classList.remove("show"));
    // Set Gallery State
    showGallery = false;
  }
}
