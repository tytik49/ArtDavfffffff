// Открытие и закрытие меню при нажатии на три полоски
document.getElementById("hamburger").addEventListener("click", function() {
    let overlay = document.getElementById("menuOverlay");
    overlay.classList.toggle("active"); // Добавляем или убираем класс active
});

// Закрытие меню при клике на область за пределами меню
document.getElementById("menuOverlay").addEventListener("click", function(event) {
    if (event.target === this) {
        this.classList.remove("active"); // Убираем класс active для скрытия меню
    }
});
