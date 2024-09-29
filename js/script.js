document.getElementById("hamburger").onclick = function() {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
    setTimeout(() => overlay.style.opacity = "1", 10); // Задержка для плавного появления
}

document.querySelector(".overlay").onclick = function() {
    this.style.opacity = "0";
    setTimeout(() => this.style.display = "none", 300); // Задержка для плавного исчезновения
}
