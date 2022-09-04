const timerCount = function() {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;

    if (timer.textContent === '0') {
        window.alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(timerCount, 1000);

// Задача № 2 со звездочкой
// const timerCount = function() {
//     const timer = document.getElementById("timer");
//     timer.textContent -= 1;

//     if (timer.textContent === '0') {
//         window.location = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1dkiqarAOlVu6vOivfn8-6WVPt5AV8h6y";
//         clearTimeout(timeoutId);
//     }
// }

// let timeoutId = setInterval(timerCount, 1000);