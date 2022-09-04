const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function() {
    clickerCounter.textContent += 1;
    image.weight = 150;
};