document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    let isMenuOpen = false;
    
    function toggleMenu(open) {
        isMenuOpen = open;
        sideMenu.classList.toggle('active', open);
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu(!isMenuOpen);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !hamburger.contains(e.target) && !sideMenu.contains(e.target)) {
            toggleMenu(false);
        }
    });
    
    // Close menu when pressing escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu(false);
        }
    });
    
    // Prevent clicks inside menu from closing it
    sideMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});