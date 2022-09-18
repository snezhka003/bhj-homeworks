const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let nowTime = new Date().toLocaleTimeString().slice(0, -3);
let messageRobot = [
    "Добрый день, мы ещё не проснулись. Напишите через 10 лет",
    "Вы ничего у нас не купили, чтобы так с нами разговаривать!",
    "Мы нечего не будем вам продавать",
    "Кто тут?",
    "Добрый день! До свидания!",
    "Где ваша совесть?",
    "К сожелению, все операторы сейчас заняты. Не пишите нам больше",
];

chatWidget.onclick = function() {
    chatWidget.classList.add('chat-widget_active');

    chatInput.addEventListener('keydown', event => {
        if (event.key == 'Enter') {        
            if (chatInput.value) {
                messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${nowTime}</div>
                        <div class="message__text">${chatInput.value}</div>
                    </div>
                    `;
                chatInput.value = "";

                let randomMessageRobot = Math.floor(Math.random() * messageRobot.length);
                
                messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">${nowTime}</div>
                        <div class="message__text">${messageRobot[randomMessageRobot]}</div>
                    </div>
                    `;
            };
        };
    });
};