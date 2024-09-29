const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Обработчик события для иконки гамбургера
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Переключение класса 'active' для открытия/закрытия меню
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // Убираем класс 'active' при клике на ссылку
    });
});
