const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('load', () => {
    const data = xhr.response;
        
    pollTitle.textContent = data.data.title;

    data.data['answers'].forEach(item => {
        //вариант 1
        let btnPollAnswer = document.createElement('button');
        btnPollAnswer.className = "poll__answer";
        btnPollAnswer.innerHTML = `${item}`;
        pollAnswers.insertAdjacentElement('afterBegin', btnPollAnswer);

        // вариант 2
        // pollAnswers.insertAdjacentHTML('afterBegin', `
        // <button class="poll__answer">
        //     ${item}
        // </button>`)
    });

    const btnAnswer = Array.from(document.querySelectorAll('.poll__answer'));

    btnAnswer.forEach(btn => {
        btn.addEventListener('click', (event) => {
            alert("Спасибо, ваш голос засчитан!");

            const request = new XMLHttpRequest();
            request.responseType = 'json';
            const index = data.data['answers'].indexOf(event.target);
            const sendForm = `vote=${data.id}&answer=${index}`;
            
            request.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send(sendForm);

            request.addEventListener('load', () => {
                const responseData = request.response;

                function getSum() {
                    let count = 0;
                    
                    responseData.stat.forEach(element => {
                        count += element.votes;   
                    });

                    return count;
                };
                
                pollAnswers.remove();

                responseData.stat.forEach(element => {
                    const votesPersent = ((element.votes / getSum()) * 100).toFixed(2);
                    //вариант 1
                    let answerTittle = document.createElement('p');
                    answerTittle.className = "answer__title";
                    answerTittle.innerHTML = `${element.answer}: <span style="font-weight:bold">${votesPersent}%</span>`;
                    pollTitle.insertAdjacentElement('afterEnd', answerTittle);

                    // вариант 2
                    // pollTitle.insertAdjacentHTML('afterEnd', `
                    // <p class="answer__title">
                    //     ${element.answer}: <span style="font-weight:bold">${votesPersent}%</span>
                    // </p>`)  
                });
            });
        });
    });
});