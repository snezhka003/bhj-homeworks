const menuLink = Array.from(document.querySelectorAll(".menu__link"));
const menuList = Array.from(document.querySelectorAll(".menu"));

menuLink.forEach((item) => {
    item.onclick = function() {
        menuList.forEach((element) => element.classList.remove("menu_active"));
        item.parentElement.querySelector(".menu").classList.toggle("menu_active"); //только не могу никак понять, почему toggle не срабатывает корректно (добавляет/удаляет класс), а срабатывает как add
    
        return false;
    }
})