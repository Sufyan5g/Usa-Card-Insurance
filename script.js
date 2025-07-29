// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Automatically update the year in the footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});