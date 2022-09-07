const popup = document.getElementById('modal_main');
let popupClose = Array.from(document.getElementsByClassName('modal__close'));
let showSuccess = document.getElementsByClassName('show-success');
let popupSuccess = document.getElementById('modal_success');

popup.className = "modal modal_active";

popupClose.forEach((item) => {
    item.onclick = function() {
        popup.className = "modal";
        popupSuccess.className = "modal";
    }
})

showSuccess[0].onclick = function() {
    popup.className = "modal";
    popupSuccess.className = "modal modal_active";
}