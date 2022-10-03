const items = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('load', () => {
    const data = xhr.response;
    const currency = data.response.Valute;

    loader.classList.remove('loader_active');

    for (let key in currency) {
        let divItem = document.createElement('div');
        divItem.className = "item";
        divItem.innerHTML = `
            <div class="item__code">
                ${currency[key].CharCode}
            </div>
            <div class="item__value">
                ${currency[key].Value}
            </div>
            <div class="item__currency">
                руб.`
            
        items.append(divItem);

        // Либо напрямую через добавление в разметку:
        // items.innerHTML += `
        // <div class="item">
        //     <div class="item__code">
        //         ${currency[key].CharCode}
        //     </div>
        //     <div class="item__value">
        //         ${currency[key].Value}
        //     </div>
        //     <div class="item__currency">
        //         руб.
        // </div>`
    };
});

