document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');

    hamburger.addEventListener('click', () => {
        menuOverlay.classList.toggle('active'); // Открываем/закрываем меню
    });

    // Закрытие меню при нажатии вне меню
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    });
});
