const getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function() {
        if (getHole(i).className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }

        if (dead.textContent === '10') {
            setTimeout(() => {
                alert("Вы выиграли! Поздравляем!!");
                dead.textContent = 0;
                lost.textContent = 0;
            });
        } else if (lost.textContent === '5') {
            setTimeout(() => {
                alert("Вы проиграли! Можете попробовать снова.");
                lost.textContent = 0;
                dead.textContent = 0;
            });
        }
    }
};