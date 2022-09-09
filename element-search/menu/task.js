const menuLink = Array.from(document.querySelectorAll(".menu__link"));
const menuList = Array.from(document.querySelectorAll(".menu"));

menuLink.forEach((item) => {
    item.onclick = function() {
        let parentMenuLink = item.parentElement.querySelector(".menu");

        if (parentMenuLink) {
            if (parentMenuLink.classList.contains("menu_active")) {
                parentMenuLink.classList.remove("menu_active");                
            } else {
                menuList.forEach((element) => element.classList.remove("menu_active"));
                parentMenuLink.classList.add("menu_active");                
            }

            return false;
        };
    };
})