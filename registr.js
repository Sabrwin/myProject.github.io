const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;


signUpBtn.addEventListener('click', function() {
 formBox.classList.add('active');
 body.classList.add('active');
})
signInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
   })


   function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const signUpForm = document.querySelector('.form_signup');
signUpForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем данные из формы
    const login = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;
    const confirmPassword = signUpForm.querySelector('input[type="password"][placeholder="Подтвердите пароль"]').value;

    // Проверяем, что все поля заполнены
    if (login && email && password && confirmPassword) {
        // Проверяем, совпадают ли пароли
        if (password === confirmPassword) {
            // Сохраняем данные пользователя в localStorage
            localStorage.setItem('registeredUser', JSON.stringify({ login, email, password }));

            // После успешной регистрации перенаправляем пользователя на нужную страницу
            window.location.href = "Diplom.html"; // Замените "registered_page.html" на адрес нужной страницы
        } else {
            alert("Пароли не совпадают");
        }
    } else {
        alert("Пожалуйста, заполните все поля");
    }
});


// Обработчик события для отправки данных с формы входа
const signInForm = document.querySelector('.form_signin');
signInForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем данные из формы
    const login = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Получаем сохраненные данные пользователя из localStorage
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    // Проверяем, что логин и пароль заполнены
    if (login && password) {
        // Проверяем, совпадают ли введенные данные с сохраненными данными при регистрации
        if (registeredUser && login === registeredUser.login && password === registeredUser.password) {
            // После успешного входа перенаправляем пользователя на нужную страницу
            window.location.href = "Diplom.html"; // Замените "authorized_page.html" на адрес нужной страницы
        } else {
            alert("Неверный логин или пароль");
        }
    } else {
        alert("Пожалуйста, заполните все поля");
    }
});


