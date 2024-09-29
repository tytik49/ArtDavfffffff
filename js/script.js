document.getElementById('hamburger').onclick = function() {
    var overlay = document.getElementById('menuOverlay');
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
};

document.getElementById('menuOverlay').onclick = function() {
    this.style.display = 'none';
};
