const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach(item => {
    item.addEventListener('click', (event) => {
        tabs.forEach(element => element.classList.remove("tab_active"));
        item.classList.add("tab_active");

        tabsContent.forEach(el => el.classList.remove("tab__content_active"));
        tabsContent[tabs.indexOf(event.target)].classList.add("tab__content_active");
    })
})