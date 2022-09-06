const minusSlide = document.querySelector('.slider__arrow_prev');
const plusSlide = document.querySelector('.slider__arrow_next');
const dotSlider = Array.from(document.querySelectorAll('.slider__dot'));
const slides = Array.from(document.querySelectorAll(".slider__item"));
let slideIndex = 1;

showSlides(slideIndex);

minusSlide.onclick = function() {
    showSlides(slideIndex -= 1);
};

plusSlide.onclick = function() {
    showSlides(slideIndex += 1);
};

function showSlides(i) {
    if (i > slides.length) {
      slideIndex = 1;
    } else if (i < 1) {
        slideIndex = slides.length;
    };

    dotSlider.forEach((item) => item.classList.remove("slider__dot_active"));
    dotSlider[slideIndex - 1].classList.add("slider__dot_active");

    slides.forEach((element) => element.classList.remove("slider__item_active"));
    slides[slideIndex - 1].classList.add("slider__item_active");
};

dotSlider.forEach((item) => {
    item.onclick = function(event) {
        dotSlider.forEach((element) => element.classList.remove("slider__dot_active"));
        dotSlider[dotSlider.indexOf(event.target)].classList.add("slider__dot_active");

        slides.forEach((element) => element.classList.remove("slider__item_active"));
        slides[dotSlider.indexOf(event.target)].classList.add("slider__item_active");
    }
});

