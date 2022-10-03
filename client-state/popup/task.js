const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

const timerIdShowPopup = setTimeout (() => {
    popup.classList.add('modal_active');
}, 5000);

popupClose.addEventListener('click', () => {
    document.cookie = "modal=closed";

    popup.classList.remove('modal_active');
});

function getCookie(name) {
    const cookiesArray = document.cookie.split('; ');
    const cookie = cookiesArray.find(item => item.startsWith(name + '='));

    return cookie.substring(name.length + 1);
};     

window.onload = () => {
    if (getCookie('modal') === 'closed') {
        clearTimeout(timerIdShowPopup);
    }
};