const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");

let timeNow = Date.now();

image.onclick = function() {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;

    if(image.getAttribute('width') === '200') { 
        image.width = Number(image.width) + 100;
    } else {
        image.width = Number(image.width) - 100;
    };
    
    let lastClick = Date.now();
    speed.textContent = (1 / ((lastClick - timeNow) / 1000)).toFixed(2);
    timeNow = Date.now();
};