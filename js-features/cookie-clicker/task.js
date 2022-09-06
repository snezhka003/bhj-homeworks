const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");

let timeNow = Date.now();

image.onclick = function() {
    image.width = ++clickerCounter.textContent % 2 ? 250 : 200;
    
    let lastClick = Date.now();
    speed.textContent = (1 / ((lastClick - timeNow) / 1000)).toFixed(2);
    timeNow = Date.now();
};