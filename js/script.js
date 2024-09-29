// Открытие меню при нажатии на три полоски
document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("menuOverlay").style.display = "flex";
});

// Закрытие меню при нажатии на область за его пределами
document.getElementById("menuOverlay").addEventListener("click", function(event) {
    if (event.target === this) { // Проверка, что нажата область вне меню
        this.style.display = "none";
    }
});
