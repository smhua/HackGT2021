var modal
var btn
var face
var wheel

modal = document.getElementById("calendar")
div = document.getElementById("calendarBounds")
btn = document.getElementById("x");
face = document.getElementById("bonus");
face.style.display = "none";

btn.onclick = function() {
    modal.style.display = "none";
    btn.style.display = "none";
    div.remove();
    face.style.display = "block"
}


faceDiv = document.getElementById("bonusBounds");
face.onclick = function() {
    face.style.display = "none"
}
face.style.width = "200px";
face.style.height = "120px";