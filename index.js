const hamburgerMenu = document.getElementById('hamburgerMenu');
const navbarLinks = document.getElementById('navbarLinks');

hamburgerMenu.addEventListener('click', () => {
    if (navbarLinks.style.display === 'none' || navbarLinks.style.display === '') {
        navbarLinks.style.display = 'block';
    } else {
        navbarLinks.style.display = 'none';
    }
});