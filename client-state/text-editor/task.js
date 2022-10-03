const editor = document.getElementById('editor');
const btnClear = document.getElementById('clear');

editor.value = window.localStorage.getItem('text');

editor.addEventListener("input", () => {
    window.localStorage.setItem('text', editor.value);
});

btnClear.addEventListener('click', () => {
    window.localStorage.removeItem('text');
    editor.value = '';
});