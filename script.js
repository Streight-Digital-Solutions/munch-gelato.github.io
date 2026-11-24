// FUNCTION THAT PLAYS THE UNIVERSAL SOUND EFFECT
function playMusic(){
    var audio = new Audio("assets/audio/game-edit2.mp3");
    audio.play();
}

// APPLY SOUND EFFECT TO ALL NAVIGATION LINKS
var navitems = document.querySelectorAll("#nav-link");
navitems.forEach((event) => event.addEventListener("mouseover", playMusic));

// APPLY SOUND EFFECT TO ALL NAVIGATION LINKS
var navitems = document.querySelectorAll("#nav-link");
navitems.forEach((event) => event.addEventListener("click", playMusic));