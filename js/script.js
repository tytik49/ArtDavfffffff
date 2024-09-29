// Получаем элементы
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

// Добавляем обработчик события клика на гамбургер
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});

