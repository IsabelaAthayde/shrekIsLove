const heart = document.querySelector("#heart img");
const play = document.querySelector("audio");

heart.addEventListener('click', function() {
    play.autoplay = true;
    play.load();
    play.classList.remove("invisible")
})

const shrekContainer = document.querySelector(".shrek-container")
const shrekHead = document.querySelector("#shrekHead");
const shrekStanding = document.querySelector(".b");

shrekContainer.addEventListener("click", function() {
    shrekHead.classList.toggle("invisible")
    shrekStanding.classList.toggle("invisible");
})

