// Получаем элементы
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

// Добавляем обработчик события клика на гамбургер
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
