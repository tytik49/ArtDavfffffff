document.getElementById("hamburger").onclick = function() {
    document.querySelector(".overlay").style.display = "block";
}

document.querySelector(".overlay").onclick = function() {
    this.style.display = "none";
}
