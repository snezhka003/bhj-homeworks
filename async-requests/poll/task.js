const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if ((xhr.readyState === xhr.DONE && xhr.status === 200)) {
        let data = JSON.parse(xhr.response);
        
        pollTitle.textContent = data.data.title;

        data.data['answers'].forEach(item => {
            pollAnswers.insertAdjacentHTML('afterBegin', `
            <button class="poll__answer">
                ${item}
            </button>`)
        });

        const btnAnswer = Array.from(document.querySelectorAll('.poll__answer'));

        btnAnswer.forEach(btn => {
            btn.onclick = () => {
                alert("Спасибо, ваш голос засчитан!");
                window.location.reload();
            };
        });
    };
});