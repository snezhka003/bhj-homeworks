const timerCount = function() {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;

    if (timer.textContent === '0') {
        setTimeout(() => window.alert("Вы победили в конкурсе!"));
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(timerCount, 1000);

// Задачи № 1 и № 2 со звездочкой
// const timer = document.getElementById("timer");
// let seconds = Number(timer.textContent);
// timer.textContent = getTime();

// function getTime() {
//     return new Date(seconds * 1000).toISOString().substring(11, 19);
// } 

// const timerCount = function() {
//     seconds -= 1;
//     timer.textContent = getTime();

//     if (timer.textContent === '00:00:00') {
//         setTimeout(() => window.location = "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1dkiqarAOlVu6vOivfn8-6WVPt5AV8h6y");
//         clearInterval(intervalId);
//     }
// }

// let intervalId = setInterval(timerCount, 1000);