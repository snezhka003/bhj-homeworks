const items = document.getElementById('items');
const loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if ((xhr.readyState === xhr.DONE && xhr.status === 200)) {
        let data = JSON.parse(xhr.response);
        let currency = data.response.Valute;

        loader.classList.remove('loader_active');

        for (let key in currency) {
            items.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${currency[key].CharCode}
                </div>
                <div class="item__value">
                    ${currency[key].Value}
                </div>
                <div class="item__currency">
                    руб.
            </div>`
        };    
    };
});

