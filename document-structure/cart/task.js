const products = Array.from(document.querySelectorAll(".product"));
const basket = document.querySelector(".cart__products");


products.forEach(product => {
    const productPlus = product.querySelector(".product__quantity-control_inc");
    const productMinus = product.querySelector(".product__quantity-control_dec");
    const productAdd = product.querySelector(".product__add");
    let count = Number(product.querySelector(".product__quantity-value").textContent);

    productPlus.addEventListener("click", () => {
        count++;
        product.querySelector(".product__quantity-value").textContent = count;
    });

    productMinus.addEventListener("click", () => {
        if (count > 1) {
            count--;
            product.querySelector(".product__quantity-value").textContent = count;
        }
    });

    productAdd.addEventListener("click", () => {
        let basketElements = Array.from(basket.querySelectorAll(".cart__product"));
        let elementInBasket = basketElements.findIndex(element => element.dataset.id === product.dataset.id);

        if (elementInBasket === -1) {
            basket.insertAdjacentHTML("afterbegin", `
            <div class="cart__product" data-id=${product.dataset.id}>
                <img class="cart__product-image" src=${product.querySelector("img").getAttribute("src")}>
                <div class="cart__product-count">${count}</div>
            </div>
            `);
        } else {
            let basketElementCount = Number(basketElements[elementInBasket].querySelector(".cart__product-count").textContent);
            basketElementCount += count;
            basketElements[elementInBasket].querySelector(".cart__product-count").textContent = basketElementCount;
        }
    });
});