document.getElementById('hamburger').onclick = function() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex'; // Переключаем видимость меню
};

document.querySelector('.overlay').onclick = function() {
    this.style.display = 'none'; // Скрываем меню при клике вне его
};
