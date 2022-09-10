const button = Array.from(document.querySelectorAll(".dropdown"));
const dropdownList = Array.from(document.querySelectorAll(".dropdown__item"));

button.forEach(item => {
    item.addEventListener("click", () => {
        let dropdown = document.querySelector(".dropdown__list");
    
        if (dropdown.classList.contains("dropdown__list_active")) {
            dropdown.classList.remove("dropdown__list_active");
        } else {
            button.forEach(item => item.classList.remove("dropdown__list_active"));
            dropdown.classList.add("dropdown__list_active");
        };
    });
})

dropdownList.forEach(item => {
    item.addEventListener("click", (event) => {
        let parentDropdownItems = item.closest(".dropdown__list");
        let dropDownValue = document.querySelector(".dropdown__value");

        if (parentDropdownItems) {
            event.preventDefault();

            if (parentDropdownItems.classList.contains("dropdown__list_active")) {
                dropDownValue.textContent = item.textContent;

                parentDropdownItems.classList.remove(".dropdown__list_active");   //не смогла понять, почему закрытие дропдауна срабатывает только если точку у класса поставить, без нее не закрывается
            };
        };
    })
})

