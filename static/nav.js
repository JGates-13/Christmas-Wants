document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.querySelector('.side-menu');
    
    hamburger.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !sideMenu.contains(e.target)) {
            sideMenu.classList.remove('active');
        }
    });
});