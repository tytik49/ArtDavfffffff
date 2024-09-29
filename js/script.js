document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Переключаем класс для отображения меню
});
