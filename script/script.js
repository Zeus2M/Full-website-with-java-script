// alert("connected");

var smallScreenMenuIcons = document.querySelector(".small-screen-menu-icons");
var navDisplayToggle = false;
var smallScreenMenu = document.querySelector(".small-screen-menu");
var hamburgerIcon = document.querySelector(".hamburger-icon");
var closeIcon = document.querySelector(".close-icon");


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