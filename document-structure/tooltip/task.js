const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));
let tooltips;


hasTooltips.forEach(hasTooltip => {
    hasTooltip.addEventListener("click", event => {
        event.preventDefault();
        if (!tooltips) {
            hasTooltips.forEach(hasTooltip => {
                const height = hasTooltip.offsetHeight;
                const { left, top } = hasTooltip.getBoundingClientRect(event.target);
                hasTooltip.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left:${left}px; top:${top + height}px">${hasTooltip.getAttribute("title")}</div>`);
                tooltips = Array.from(document.querySelectorAll(".tooltip"));
            });
        };

        if (!event.target.nextElementSibling.classList.contains ("tooltip_active")) {
            event.target.nextElementSibling.classList.add("tooltip_active");
        } else {
            event.target.nextElementSibling.classList.remove("tooltip_active");
        };

        const tooltipsActive = Array.from(document.querySelectorAll(".tooltip_active"));

        tooltipsActive.forEach(tooltipActive => {
            if (event.target.nextElementSibling !== tooltipActive) {
                tooltipActive.classList.remove("tooltip_active");
            };
        });
    });
});