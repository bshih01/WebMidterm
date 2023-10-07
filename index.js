const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuWrapper = document.querySelector('.menu-wrapper');

hamburgerMenu.addEventListener('click', () => {
    if (menuWrapper.style.display === 'none' || menuWrapper.style.display === '') {
        menuWrapper.style.display = 'block';
        hamburgerMenu.classList.add('active');  // add the active class
    } else {
        menuWrapper.style.display = 'none';
        hamburgerMenu.classList.remove('active');  // remove the active class
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 863) { // Check for your breakpoint
        menuWrapper.removeAttribute('style'); // Removes inline styles
        hamburgerMenu.classList.remove('active');  // remove the active class
    }
});