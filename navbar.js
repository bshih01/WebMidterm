let isOverHamburger = false;
let isOverDropdown = false;
let timeout;

function showDropdown() {
    hamburgerDropdown.style.display = 'block';
    hamburgerMenu.classList.add('active');
}

function hideDropdown() {
    if (!isOverHamburger && !isOverDropdown) {
        hamburgerDropdown.style.display = 'none';
        hamburgerMenu.classList.remove('active');
    }
}

hamburgerMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    isOverHamburger = true;
    showDropdown();
});

hamburgerMenu.addEventListener('mouseleave', () => {
    isOverHamburger = false;
    timeout = setTimeout(hideDropdown, 100);
});

hamburgerDropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    isOverDropdown = true;
});

hamburgerDropdown.addEventListener('mouseleave', () => {
    isOverDropdown = false;
    timeout = setTimeout(hideDropdown, 100);
});

hamburgerMenu.addEventListener('click', () => {
    if (hamburgerDropdown.style.display === 'none' ||
        hamburgerDropdown.style.display === '') {
        showDropdown();
    } else {
        hideDropdown();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 752) {
        hamburgerDropdown.style.display = 'none';
        hamburgerMenu.classList.remove('active');
    }
});
