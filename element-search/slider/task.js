const minusSlide = document.querySelector('.slider__arrow_prev');
const plusSlide = document.querySelector('.slider__arrow_next');
const dotSlider = Array.from(document.querySelectorAll('.slider__dot'));
const slides = Array.from(document.querySelectorAll(".slider__item"));

function showSlides(newActiveSlide) {
    let activeSlideIndex = slides.findIndex(item => item.classList.contains("slider__item_active"));

    slides[activeSlideIndex].classList.remove("slider__item_active");
    dotSlider[activeSlideIndex].classList.remove("slider__dot_active");

    if (newActiveSlide < 0) {
        newActiveSlide = slides.length - 1;
    } else if (newActiveSlide >= slides.length) {
        newActiveSlide = 0;
    };

    slides[newActiveSlide].classList.add("slider__item_active");
    dotSlider[newActiveSlide].classList.add("slider__dot_active");
}

dotSlider.forEach((item, index) => {
    item.onclick = function() {
        showSlides(index);
    }
});

minusSlide.onclick = function() {
    let activeSlideIndex = slides.findIndex(item => item.classList.contains("slider__item_active"));
    showSlides(activeSlideIndex - 1);
};

plusSlide.onclick = function() {
    let activeSlideIndex = slides.findIndex(item => item.classList.contains("slider__item_active"));
    showSlides(activeSlideIndex + 1);
};