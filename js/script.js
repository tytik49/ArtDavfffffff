document.getElementById("hamburger").onclick = function() {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
};

// Закрытие меню при нажатии на ссылку
document.querySelectorAll('.menu-content a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.overlay').style.display = "none";
    });
});
