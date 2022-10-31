const heart = document.querySelector("#heart");
const body = document.querySelector("body");
const play = document.querySelector("audio");

heart.addEventListener('click', function() {
    play.autoplay = true;
    play.load();
    play.classList.remove("invisible")
})

