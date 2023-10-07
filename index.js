const hamburgerDropdown = document.getElementById('hamburgerDropdown');

hamburgerMenu.addEventListener('click', () => {
    if (hamburgerDropdown.style.display == 'none' ||
        hamburgerDropdown.style.display == '') {
            hamburgerDropdown.style.display = 'block';
            hamburgerMenu.classList.add('active');
    } else {
        hamburgerDropdown.style.display = 'none';
        hamburgerMenu.classList.remove('active');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 863) {
        hamburgerDropdown.style.display = 'none';
        hamburgerMenu.classList.remove('active');
    }
});
