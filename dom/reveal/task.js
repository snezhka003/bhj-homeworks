const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible(item) {
    const { top, bottom } = item.getBoundingClientRect(item);

    if (top > window.innerHeight || bottom < 0) {
        return false;
    }

    return true;
};

window.addEventListener('scroll', () => {
    reveal.forEach(element => {
        element.classList.remove("reveal_active");

        if (isVisible(element)) {
            element.classList.add("reveal_active");
        } else {
            element.classList.remove("reveal_active");
        }
    });
});