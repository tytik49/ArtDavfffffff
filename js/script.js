document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("menuOverlay").style.display = "flex";
});

document.getElementById("menuOverlay").addEventListener("click", function() {
    this.style.display = "none";
});
