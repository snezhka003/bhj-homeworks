const formSignIn = document.getElementById('signin__form');
const signInBox = document.getElementById('signin');
const btnSignIn = document.getElementById('signin__btn');
const welcomeBox = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const btnSignOut = document.getElementById('signout__btn');

btnSignIn.addEventListener('click', () => {
    formSignIn.addEventListener('submit', (event) => {
        const formData = new FormData(formSignIn);
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

        xhr.addEventListener('load', () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                const data = JSON.parse(xhr.response);

                if (data.success) {
                    window.localStorage.setItem('user_id', data.user_id);
                    userId.textContent = data.user_id;
                    welcomeBox.classList.add('welcome_active');
                    signInBox.classList.remove('signin_active');
                } else {
                    formSignIn.reset(); 
                    alert('Неверный логин/пароль');
                };
            }; 
        });

        xhr.send(formData);
        
        event.preventDefault();
    });
});

btnSignOut.addEventListener('click', () => {
    welcomeBox.classList.remove('welcome_active');
    signInBox.classList.add('signin_active');
    window.localStorage.clear();
});

window.onload = () => {
    if (window.localStorage.getItem('user_id')) {
        userId.textContent = window.localStorage.getItem('user_id');
        welcomeBox.classList.add('welcome_active');
        signInBox.classList.remove('signin_active');
    };
};