document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    // Обработчик события для открытия/закрытия меню
    hamburger.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});
