const menuLink = Array.from(document.querySelectorAll(".menu__link"));
const menuList = Array.from(document.querySelectorAll(".menu"));

menuLink.forEach((item) => {
    item.onclick = function() {        
        menuList.forEach((element) => {
            if (element.classList.contains("menu_sub")) {
                element.classList.toggle("menu_active");

                return false;
            };

            if (element.classList.contains("menu_active")) {
                element.classList.remove("menu_active");
            };
        });
    };
})