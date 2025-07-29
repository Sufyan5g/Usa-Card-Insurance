document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu (Hamburger) Functionality
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Automatically update the year in the footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});