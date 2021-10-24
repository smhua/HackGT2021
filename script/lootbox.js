var wheel
var clicked = false;
wheel = document.getElementById("wheel");

wheel.onclick = function() {
    if (!clicked) {
        clicked = true;
        var rand = Math.random()*1000000 + 1000000;
        for (let i = 0; i < rand; i++) {
            wheel.style.animationPlayState = "pasued";
            wheel.style.animatinoPlayState = "play";
        }
        wheel.style.animationPlayState = "paused";
    }
}