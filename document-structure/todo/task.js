const taskAdd = document.querySelector(".tasks__add");
const taskList = document.querySelector(".tasks__list");
const taskInput = document.querySelector(".tasks__input");


taskAdd.addEventListener("click", event => {
    event.preventDefault();

    if (taskInput.value.trim()) {
        taskList.insertAdjacentHTML("afterbegin",
        `<div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);

        taskInput.value = "";

        let task = document.querySelector(".task");
        let taskRemove = task.querySelector(".task__remove");

        taskRemove.addEventListener("click", () => {
            task.remove();
        });
    };
});