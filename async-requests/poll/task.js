const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();

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
            btn.addEventListener('click', (event) => {
                alert("Спасибо, ваш голос засчитан!");

                let request = new XMLHttpRequest();
                let index = data.data['answers'].indexOf(event.target);
                let sendForm = `vote=${data.id}&answer=${index}`;
                
                request.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                request.send(sendForm);

                request.addEventListener('readystatechange', () => {
                    if ((request.readyState === request.DONE && request.status === 200)) {
                        let responseData = JSON.parse(request.response);

                        function getSum() {
                            let count = 0;
                            
                            responseData.stat.forEach(element => {
                                count += element.votes;   
                            });

                            return count;
                        };
                        
                        pollAnswers.remove();

                        responseData.stat.forEach(element => {
                            let votesPersent = ((element.votes / getSum()) * 100).toFixed(2);

                            pollTitle.insertAdjacentHTML('afterEnd', `
                            <p class="answer__title">
                                ${element.answer}: <span style="font-weight:bold">${votesPersent}%</span>
                            </p>`)  
                        });
                    };
                });
            });
        });
    };
});