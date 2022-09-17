const book = document.getElementById('book');
const btnTextFontSize = Array.from(document.querySelectorAll('.font-size'));
const bookColor = document.querySelector('.book__control_color');
const btnTextColor = Array.from(bookColor.querySelectorAll('.color'));
const bookBackground = document.querySelector('.book__control_background');
const btnTextBackground = Array.from(bookBackground.querySelectorAll(".color"));

btnTextFontSize.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    
        btnTextFontSize.forEach(item => item.classList.remove('font-size_active'));
        
        element.classList.add('font-size_active');

        const dataTextSize = [];

        btnTextFontSize.forEach(item => dataTextSize.push(`book_fs-${item.dataset.size}`));
        
        dataTextSize.forEach(item => {
            book.classList.remove(item);
        });

        book.classList.add(`book_fs-${event.target.dataset.size}`);
    });
});

btnTextColor.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    
        btnTextColor.forEach(item => item.classList.remove('color_active'));
        
        element.classList.add('color_active');

        const dataTextColor = [];

        btnTextColor.forEach(item => dataTextColor.push(`book_color-${item.dataset.textColor}`));
        
        dataTextColor.forEach(item => {
            book.classList.remove(item);
        });

        book.classList.add(`book_color-${event.target.dataset.textColor}`);
    });
});

btnTextBackground.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    
        btnTextBackground.forEach(item => item.classList.remove('color_active'));
        
        element.classList.add('color_active');

        const dataTextBackground = [];

        btnTextBackground.forEach(item => dataTextBackground.push(`book_bg-${item.dataset.bgColor}`));
        
        dataTextBackground.forEach(item => {
            book.classList.remove(item);
        });

        book.classList.add(`book_bg-${event.target.dataset.bgColor}`);
    });
});