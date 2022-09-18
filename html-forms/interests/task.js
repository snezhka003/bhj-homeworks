const interestItems = Array.from(document.querySelectorAll('.interest__check'));

interestItems.forEach(item => {
    item.addEventListener('change', () => {
        if (!item.closest('.interests_active')) {
            const childElementsInterestCheck = Array.from(item.closest('.interest').querySelectorAll('.interest__check'));
            if(item.checked) {
                childElementsInterestCheck.forEach(element => element.checked = true);
            } else {
                childElementsInterestCheck.forEach(element => element.checked = false);
            };
        };
    });
});