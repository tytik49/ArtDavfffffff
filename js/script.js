document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');

    hamburger.addEventListener('click', () => {
        menuOverlay.classList.toggle('active'); // Открыть/закрыть меню
    });

    // Закрыть меню при нажатии вне его области
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    });
});
