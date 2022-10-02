const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

let timerId = setTimeout (() => {
    popup.classList.add('modal_active');
}, 5000);

popupClose.addEventListener('click', () => {
    document.cookie = "modal=closed";

    popup.classList.remove('modal_active');
});

function getCookie(name) {
    let cookie_arr = document.cookie.split('; ');
    let cookie_obj = {};

    for (let i=0; i<cookie_arr.length; i++) {
        let nv = cookie_arr[i].split('=');
        cookie_obj[nv[0]] = nv[1]; 
    }

    return cookie_obj[name];
};     

window.onload = () => {
    if (getCookie('modal') == 'closed') {
        clearTimeout(timerId)
    }
};