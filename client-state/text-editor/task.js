const editor = document.getElementById('editor');
const editorText = window.localStorage.getItem('text');
const btnClear = document.getElementById('clear');

if (editorText) {
    editor.value = editorText;
} 

editor.addEventListener("change", () => {
    window.localStorage.setItem('text', editor.value);
});

btnClear.addEventListener('click', () => {
    window.localStorage.removeItem('text');
    editor.value = '';
})