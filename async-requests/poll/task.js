const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function createRequest(options = {}) {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json';
    function getOptionsHeader() {
        for (let key in options.header) {
            headerKey = key;
            headerValue = options.header[key];

            return xhr.setRequestHeader(headerKey, headerValue);
        }
    }

    xhr.open(options.method, options.url);
    getOptionsHeader();
    xhr.send(options.body);
    xhr.addEventListener('load', () => {
        options.callback(xhr.response);
    });
};

createRequest({
    url: 'https://netology-slow-rest.herokuapp.com/poll.php',
    method: 'GET',
    callback: (response) => {
        createBtn(response); 
    }
});

function createBtn(data) {
    pollTitle.textContent = data.data.title;

    data.data['answers'].forEach(item => {
        let btnPollAnswer = document.createElement('button');
        btnPollAnswer.className = "poll__answer";
        btnPollAnswer.innerHTML = `${item}`;
        pollAnswers.insertAdjacentElement('afterBegin', btnPollAnswer);
    });

    const btnAnswer = Array.from(document.querySelectorAll('.poll__answer'));

    btnAnswer.forEach(btn => {
        btn.addEventListener('click', (event) => {
            alert("Спасибо, ваш голос засчитан!");

            const index = data.data['answers'].indexOf(event.target);
            const sendForm = `vote=${data.id}&answer=${index}`;

            createRequest({
                url: 'https://netology-slow-rest.herokuapp.com/poll.php',
                header: {['Content-type']: 'application/x-www-form-urlencoded'},
                method: 'POST',
                body: sendForm,
                callback: (response) => {
                    console.log(response)
                    showVotes(response); 
                }
            });

            function showVotes(responseData) {
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
                    let answerTittle = document.createElement('p');
                    answerTittle.className = "answer__title";
                    answerTittle.innerHTML = `${element.answer}: <span style="font-weight:bold">${votesPersent}%</span>`;
                    pollTitle.insertAdjacentElement('afterEnd', answerTittle); 
                });
            };
        });
    });
};