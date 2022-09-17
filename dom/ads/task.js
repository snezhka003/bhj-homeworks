const rotator = document.querySelectorAll('.rotator');
let rotatorIndex = 0;

setInterval(() => {
    for (let item of rotator) {
        const rotatorCase = item.querySelectorAll(".rotator__case");
        
        for (let el of rotatorCase) {
            el.classList.remove("rotator__case_active");
        }

        rotatorIndex < rotatorCase.length - 1 ? rotatorIndex++ : rotatorIndex = 0;
        
        rotatorCase[rotatorIndex].classList.add("rotator__case_active");   
    }
}, 1000);

