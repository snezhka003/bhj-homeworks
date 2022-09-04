const popup = document.getElementById('modal_main');
popup.className = "modal modal_active";
let popupClose = document.getElementsByClassName('modal__close');
let arr = Array.from(popupClose);
let showSuccess = document.getElementsByClassName('show-success');
let popupSuccess = document.getElementById('modal_success');

for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = function() {
        popup.className = "modal";
        popupSuccess.className = "modal";
    }
}

showSuccess[0].onclick = function() {
    popupSuccess.className = "modal modal_active";
}