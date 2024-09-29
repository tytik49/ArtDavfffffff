document.getElementById("hamburger").onclick = function() {
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
}

document.querySelector(".overlay").onclick = function() {
    this.style.display = "none";
}
