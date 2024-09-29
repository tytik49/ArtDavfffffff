document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});
