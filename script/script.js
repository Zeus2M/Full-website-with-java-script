// alert("connected");

var smallScreenMenuIcons = document.querySelector(".small-screen-menu-icons");
var navDisplayToggle = false;
var smallScreenMenu = document.querySelector(".small-screen-menu");
var hamburgerIcon = document.querySelector(".hamburger-icon");
var closeIcon = document.querySelector(".close-icon");
var swimmingPopup = document.querySelector(".swimming-popup");
var swimmingPoolHighlight = document.querySelector(".swimmingpoolhighlight");
var popupcloseIcon = document.querySelector(".popup-close-icon");



closeIcon.style.display = "none";
smallScreenMenu.style.display = "none";
smallScreenMenuIcons.addEventListener("click", function () { 
    navDisplayToggle = !navDisplayToggle;
    
    if (navDisplayToggle === true) {

        smallScreenMenu.style.display = "flex"; 
        closeIcon.style.display = "block";
        hamburgerIcon.style.display = "none";
        
    }else{
        smallScreenMenu.style.display = "none"; 
        closeIcon.style.display = "none";
        hamburgerIcon.style.display = "block";
    }

})


swimmingPopup.style.display = "none";
swimmingPoolHighlight.addEventListener("click", function () {
    swimmingPopup.style.display = "flex";

})
 popupcloseIcon.addEventListener("click", function () {
    swimmingPopup.style.display = "none";
})