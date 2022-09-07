const menuLink = Array.from(document.querySelectorAll(".menu__link"));
const menuList = Array.from(document.querySelectorAll(".menu"));

menuLink.forEach((item) => {
    item.onclick = function() {
        let parentMenuLink = item.parentElement.querySelector(".menu");
        
        if (parentMenuLink !== menuList.firstElementChild && parentMenuLink !== menuList.lastElementChild) {
            parentMenuLink.classList.toggle("menu_active");

            return false;
        };

        menuList.forEach((element) => {
            if (element.classList.contains("menu_active")) {
                element.classList.remove("menu_active");
            }
        });
    };
})