var modal
var btn
var face

modal = document.getElementById("calendar")
div = document.getElementById("calendarBounds")
btn = document.getElementById("x");

btn.onclick = function() {
    modal.style.display = "none";
    btn.style.display = "none";
}

face = document.getElementById("bonus");
faceDiv = document.getElementById("bonusBounds");
face.onclick = function() {
    face.style.display = "none";
    faceDiv.remove();
}
face.style.width = "200px";
face.style.height = "120px";